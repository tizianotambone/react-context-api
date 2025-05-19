Esercizio di oggi: React Context API
repo: react-context-api
Consegna
Sfruttiamo le Context API per rendere disponibile la lista dei post in tutta la nostra app.
Create una nuova repo e seguite i seguenti passaggi:
Partiamo col definire la lista dei post all’interno di App.jsx (quindi utilizzerete il primo "metodo" visto a lezione, quello più immediato, senza la personalizzazione del provider)
Create un componente PostsPage.jsx che conterrà al suo interno un titolo e un componente PostsList.jsx che mostra la lista di tutti i nostri post.
Creiamo un file per definire il nostro Context ed esportiamolo
Importiamo il Provider in App.jsx e wrappiamoci la nostra applicazione
Facciamo in modo che il componente PostsList.jsx recuperi i post consumando il Context e crei dunque una card per ciascuno di essi.
La struttura dell’App deve essere
App.jsx > PostsPage.jsx > PostsList.jsx > PostCard.jsx
