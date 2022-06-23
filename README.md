![](https://img.shields.io/badge/Microverse-blueviolet)

# Leaderboard

> This app allows you to add your score to the Leaderboard, taking the scores form external API.


## Built With

- Major languages: Html, Css , JS.
- Technologies used : Webpack, GitHub, Git Flow.


## Getting Started

To get a local copy up and running follow these simple steps.

- Clone the project `$ git clone git@github.com:MoRaad97/Leaderboard.git`
- Open your project in VS code of any text editor that you love to use.
- Install node js `npm install`
- you can bulid the project `npm run build` and run it using the browser or live server or you can run it using `npm run start` or `npm run dev`.

## How the API work
 - Take quick look [here](https://www.notion.so/Leaderboard-API-service-24c0c3c116974ac49488d4eb0267ade3) about how to use this API.
 - use this code to get new id for your game `const id = () => {
  fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/", {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
     name: "My new game"
    }),
  }).then((data)=> {
   return data.json()
  }).then((myId)=> {
    console.log(myId.result)
  });
};
id()` 
You can see the Id in the console of your browser.


## Authors

👤 **Mohammed Raad**

- GitHub: [@MoRaad97](https://github.com/MoRaad97)
- Twitter: [@MohammedRaadz](https://twitter.com/MohammedRaadz)
- LinkedIn: [Mohammed Raad](linkedin.com/in/mohammed-raad-600176210)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- Microverse Team.
- Micronaots.
- My partners.
