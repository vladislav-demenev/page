const path = require('path'); // встроенный модуль Node.js для работы с путями
const HtmlWebpackPlugin = require('html-webpack-plugin'); // плагин для создания HTML-файлов
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // плагин для извлечения CSS в отдельные файлы
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // плагин для очистки выходной папки перед сборкой

module.exports = {
  // Указываем режим сборки: 'development' или 'production'
  mode: 'development',

  // Указываем точку входа
  entry: './src/index.js',

  // Указываем выходную директорию и имя выходного файла
  output: {
    path: path.resolve(__dirname, 'public'), // Папка для выходных файлов
    filename: 'bundle.js', // Имя выходного JS-файла
  },

  // Настройки для дев-сервера (опционально)
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    port: 8080,
    open: true,
  },

  // Правила для обработки файлов
  module: {
    rules: [
      // Обработка JavaScript с помощью Babel
      {
        test: /\.js$/, // Проверка всех файлов с расширением .js
        exclude: /node_modules/, // Исключаем папку node_modules
        use: {
          loader: 'babel-loader',
        },
      },
      // Обработка SCSS/CSS файлов
      {
        test: /\.s[ac]ss$/i, // Проверка всех файлов с расширением .scss или .sass
        use: [
          MiniCssExtractPlugin.loader, // Извлечение CSS в отдельные файлы
          'css-loader', // Преобразование CSS в CommonJS
          'sass-loader', // Компиляция SCSS в CSS
        ],
      },
      // Обработка CSS файлов
      {
        test: /\.css$/, // Проверка всех файлов с расширением .css
        use: [
          MiniCssExtractPlugin.loader, // Извлечение CSS в отдельные файлы
          'css-loader', // Преобразование CSS в CommonJS
        ],
      },
      // Обработка изображений и других файлов
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, // Проверка всех изображений
        type: 'asset/resource',
      },
    ],
  },

  // Подключение плагинов
  plugins: [
    new CleanWebpackPlugin(), // Очищает выходную папку перед каждой сборкой
    new HtmlWebpackPlugin({
      template: './public/index.html', // Шаблон HTML-файла
      filename: 'index.html', // Имя выходного HTML-файла
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css', // Имя выходного CSS-файла
    }),
  ],
};
