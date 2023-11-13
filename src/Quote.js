import {useState, useEffect} from "react";
import QuoteList from "./QuoteList";
function Quote() {
    const [quotes, setQuotes] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function QuoteAPI() {
          const response = await fetch(
            "https://dummyjson.com/quotes"
            );
          const data = await response.json();
          setLoading(false);
          console.log(data);
        }
QuoteAPI();
}, []);
const quotesJSX = quotes.map((quotes, indeks) => {
    return <QuoteList key={indeks} quotes={quotes.quotes} author={quotes.author} />
});
return (
    <>
{loading ? <p>Loading...</p> : quotesJSX}
</>
)
}
export default Quote;