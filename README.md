<img src="/image/top-pg.png" alt="Weather App Screenshot" width="500"/><img src="/image/search-pg.png" alt="Weather App Screenshot" width="500"/>


# Weather Wise

This is a weather forecast app created for learning JavaScript.  
The background changes dynamically based on the weather, and custom icons from icons8.com are used instead of the default icons.  
I implemented asynchronous communication using `fetch` and utilized the OpenWeatherMap API to retrieve current weather data, as well as a 5-day weather forecast.  
While writing the code, I visualized how the implementation would work. During the process, I encountered errors when calling the API, but by researching solutions, I was able to complete the implementation and deepen my understanding. Through this project, I was able to gain practical experience with JavaScript dynamics, asynchronous processing, API usage, synchronizing custom icons, and changing backgrounds.

---

## Implementation Details

- **Retrieving Required DOM Elements**  
    - A form for entering the city name  
    - A search button  
    - Elements to display weather information (e.g., icons, temperature, weather description)

- **Fetching Weather Information**  
    - Using the OpenWeatherMap API to fetch weather forecast data  
    - Setting up the API endpoint and necessary parameters (e.g., city name, API key)

- **Retrieving User Input**  
    - Getting the city name entered in the form and using it in the API request  
    - Handling errors for empty or invalid city names

- **API Request and Response Handling**  
    - Implementing asynchronous communication using `fetch`  
    - Extracting necessary data from the response (e.g., temperature, weather description, icon info)

- **Inserting Data into HTML Elements**  
    - Setting the weather icon as the `src` of an `<img>` tag  
    - Displaying temperature and weather description in the corresponding elements

- **Error Handling**  
    - Displaying error messages in case of API request failure or invalid city names  

---

# Weather Wise

これはJavaScriptの学習用に作成した天気予報アプリです。 天気に応じて背景を動的に変更し、デフォルトのアイコンの代わりにicons8.comから取得したカスタムアイコンを使用しています。 OpenWeatherMap APIを活用し、fetchを使用した非同期通信を実装。現在の天気情報とともに、5日間の天気予報も同時に取得して表示しています。 コードを記述する際には、どのように動作するかを事前にイメージしながら実装を進めました。非同期処理でAPI呼び出し時にエラーが発生しましたが、その解決方法を調べながら実装を完了でき、知識を深めることができました。このプロジェクトを通じて、JavaScriptの動き、非同期処理、APIの使用、カスタムアイコンの同期、背景の変更など、実践的なスキルを身につけることができました。

---

## 実装の詳細

- **必要なDOM要素を取得**  
    - 入力フォーム（都市名を入力する場所）  
    - 検索ボタン  
    - 天気情報を表示する要素（例: アイコン、気温、天気の説明など）

- **天気情報の取得**  
    - 天気予報データを取得するためのOpenWeatherMap APIの利用  
    - APIのエンドポイントと必要なパラメータ（例: 都市名、APIキー）を構築する

- **ユーザーが入力した都市名を取得**  
    - フォームの入力値を取得してAPIリクエストに使用する  
    - 入力エラー（空欄や無効な都市名）のハンドリング

- **APIリクエストとレスポンスの処理**  
    - fetchを使用して非同期通信を実装  
    - レスポンスから必要なデータ（例: 温度、天気の説明、アイコン情報）を抽出

- **HTML要素に取得したデータを挿入**  
    - 天気アイコンを `<img>` タグの src に設定  
    - 温度や天気の説明を該当する要素にテキストで表示

- **通信エラーや不正な入力への対応**  
    - APIリクエストが失敗した場合や、都市名が無効な場合のエラーメッセージ表示

 
