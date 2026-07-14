# 🎨 AI Poem Generator

A simple web app that generates creative poems on any topic using the **SheCodes AI API**. Just type a subject, click a button, and watch a unique poem appear instantly.

## ✨ Features

- Generate a poem on any topic you enter
- Clean, responsive, single-page interface
- Powered by SheCodes AI (built on top of OpenAI)
- Lightweight — no frameworks or build tools required

## 📁 File Structure

```
ai-poem-generator/
│
├── index.html
└── src/
    ├── style.css
    └── script.js
```

## 🚀 Getting Started

### 1. Clone or Download

```
git clone https://github.com/your-username/ai-poem-generator.git
```

Or simply download the project as a ZIP and extract it.

### 2. Get a SheCodes AI API Key

1. Go to [https://shecodes.io/ai](https://shecodes.io/ai)
2. Sign up / log in and generate your personal API key

### 3. Add Your API Key

Open `src/script.js` and replace the placeholder with your key:

```js
const apiKey = "YOUR_SHECODES_API_KEY";
```

### 4. Run the Project

Just open `index.html` in your browser — no server or build step needed.

## 🛠️ How It Works

1. The user types a topic into the input field.
2. On button click, `script.js` sends a request to the SheCodes AI API endpoint with the topic and your API key.
3. The API returns a generated poem.
4. The poem is displayed on the page inside a designated container.

Example fetch request used in `script.js`:

```js
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=Write me a poem about ${topic}&key=${apiKey}`;

axios.get(apiUrl).then(function (response) {
  document.querySelector("#poem-output").innerHTML = response.data.answer;
});
```

## 🧰 Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- [SheCodes AI API](https://shecodes.io/ai)
- [Axios](https://axios-http.com/) (for API requests)


## 🙌 Acknowledgments

- Built as part of a SheCodes Coding Challenge
- Powered by [SheCodes AI](https://shecodes.io/ai)
