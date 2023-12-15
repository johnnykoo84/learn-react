import "./App.css";
import { LoremIpsum } from "lorem-ipsum";

function App() {
  // js code here

  // using loremipsum
  const lorem = new LoremIpsum({
    wordsPerSentence: {
      max: 16,
      min: 4,
    },
  });
  let posts = [];
  for (let i = 0; i < 5; i++) {
    posts.push(lorem.generateSentences(1));
  }
  console.clear();
  console.log("sentences", posts);

  // return jsx here
  return (
    <>
      <div>
        <ul className="ListContainer">
          <li className="List">1. {posts[0]}</li>
          <li className="List">2. {posts[1]}</li>
          <li className="List">3. {posts[2]}</li>
          <li className="List">4. {posts[3]}</li>
          <li className="List">5. {posts[4]}</li>
        </ul>
      </div>
      {/* <div>
        <ul className="ListContainer">
          {posts.map((post, idx) => {
            return (
              <div className="List" key={idx}>
                {idx + 1}. {post}
              </div>
            );
          })}
        </ul>
      </div> */}
    </>
  );
}

export default App;
