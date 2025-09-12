import { useQueryQuery } from "../generated/graphql-types";
import InfoHome from "../components/InfoHome";

const HomePage = () => {
    const { data, loading, error } = useQueryQuery();
    console.log(data)

    return (
        <div>
            <InfoHome />
        </div>
    );
};

export default HomePage;