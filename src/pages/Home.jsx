import Filters from "../components/Filters";
import Tour from "../components/Tour";
import tours from "../data/tours";
function Home() {
    
  const filters = ["все", "по россии", "горящие"];

    return (<>
        <main>
          <div className="container">
            <h2>КАТАЛОГ ТУРОВ</h2>
            <Filters filters={filters} activeIndex={0} />
  
            <section className="tours">
              <div className="" style={{ marginTop: "3rem" }}>
                {tours.map((t) => (
                  <Tour key={t.id} {...t} />
                ))}
              </div>
            </section>
          </div>
        </main>
      </>);
}

export default Home;