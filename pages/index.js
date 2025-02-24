import Cards from "@/components/Cards/Cards";
import PageHead from "@/components/PageHead";

const Home = () => {
  return (
    <div>
      <PageHead title="Tripkolic" />
      <Cards cardHeaderTitle={"Tripkolic Cards"} cardHeaderIsSearch={true} />
    </div>
  );
};

export default Home;
