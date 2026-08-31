# Pesca Justa — versão para iPhone e Android

Esta versão já pode funcionar como PWA.

## iPhone / iPad
1. Abra o endereço do Pesca Justa no Safari.
2. Toque em Compartilhar.
3. Escolha "Adicionar à Tela de Início".
4. O Pesca Justa aparecerá como aplicativo.

## Android
1. Abra o endereço do Pesca Justa no Chrome.
2. Abra o menu.
3. Escolha "Instalar aplicativo" ou "Adicionar à tela inicial".

## Publicação no GitHub Pages
Envie TODOS os arquivos da pasta PWA para a raiz do repositório:
- index.html
- manifest.webmanifest
- service-worker.js
- icon-192.png
- icon-512.png

## Aplicativo nativo APK / iPhone
Os arquivos capacitor.config.json e package.json são a base para empacotar o mesmo Pesca Justa com Capacitor.
O arquivo index.html e os demais arquivos web devem ficar dentro de uma pasta chamada www.
Depois, em um computador com Node.js:
npm install
npx cap add android
npx cap add ios
npx cap sync

Android pode ser aberto no Android Studio.
iOS precisa ser compilado no macOS usando Xcode.
