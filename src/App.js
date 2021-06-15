import "./App.css";
import Card from "./components/Card/Card";
import food from "./assets/food.jpg"; // Tell webpack this JS file uses this image


function App() {
  const recipeAuthor = "mubeya";
  const recipeItem = {
    title: "İskender Kebap",
    date: "15 Haziran 2021, Salı",
    image: food,
    description:
      "İskender kebap veya iskender döner, Bursa yöresinin meşhur kebap yemeklerinden biridir. 1867 yılında Kayhan Çarşısı'nda başlamıştır. Aslında temel malzemesi döner olsa da iskenderi iskender yapan, üstündeki tereyağ, domates sosu, yanındaki yoğurt ve altındaki yağlı pide parçalarıdır.",
  };

  const likeCount = 1000;
  const isLiked = true;

  return (
    <div className="App">
      <header className="App-header">
        <Card
          title={recipeItem.title}
          date={recipeItem.date}
          image={recipeItem.food}
          author={recipeAuthor}
          recipe={recipeItem.description}
          count={likeCount}
          liked={isLiked}
          foodImg={food}
        />
      </header>
    </div>
  );
}

export default App;
