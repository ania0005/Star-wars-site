import { useEffect, useState } from "react";
import { getApiResource } from "../../utils/network";
import { API_PEOPLE } from "../../constants/api";
import { getPeopleId, getPeopleImage } from "../../services/getPeopleData";
import PeopleList from "../../components/PeoplePage/PeopleList";
import { withErrorApi } from "../../hoc helpers/withErrorApi";


const PeoplePage = ({setErrorApi}) => {
  const [people, setPeople] = useState(null);
 

  const getResource = async (url) => {
    const res = await getApiResource(url);

    if (res) {
      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url);
        const img = getPeopleImage(id);

        // return {
        //   id: id,
        //   name: name,
        //   url: url
        // }

        return {
          id,
          name,
          img,
        };
      });

      setPeople(peopleList);
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };
  useEffect(() => {
    getResource(API_PEOPLE);
  }, []);

  return (
    <>
     <h1>Navigation</h1>
     {people && <PeopleList people={people} />}
    </>
  );
};

export default withErrorApi(PeoplePage);
