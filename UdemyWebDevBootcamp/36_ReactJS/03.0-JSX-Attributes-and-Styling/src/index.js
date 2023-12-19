import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Foods
    </h1>
    <img className="pic" src={img}></img>
    <img
      className="pic"
      src="https://www.wallpaperflare.com/static/994/690/557/fantasy-art-mountains-fantasy-city-castle-wallpaper.jpg"
    ></img>
    <img
      className="pic"
      src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/003e1649-1298-4774-a5fe-0cbc297194f1/deoo4cp-db794b78-b1fe-49e6-922b-487222da9b95.jpg/v1/fill/w_1192,h_670,q_70,strp/mountain_valley_by_somatonic_deoo4cp-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcLzAwM2UxNjQ5LTEyOTgtNDc3NC1hNWZlLTBjYmMyOTcxOTRmMVwvZGVvbzRjcC1kYjc5NGI3OC1iMWZlLTQ5ZTYtOTIyYi00ODcyMjJkYTliOTUuanBnIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.dzeSzaO1eSnHkatmx1BhINhUQu6CnOJTAXYpngknBdY"
    ></img>
    <img
      className="pic"
      src="https://img.freepik.com/premium-photo/fantasy-landscape-winter-mountains-peaks-slopes-mountains-are-covered-with-snow-ice-magical-mountain-valley-winter_86390-7222.jpg?w=2000"
    ></img>
  </div>,
  document.getElementById("root")
);
