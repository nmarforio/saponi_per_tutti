import Link from "next/link";

export default function Contact() {
  return (
    <>
      <h2 className="contactTitle">Informazioni e contatti</h2>
      <div className="contactcard">
        <h4>Spede di spedizione per la Svizzera, posta B</h4>
        <ul>
          <li>1-3 articoli + CHF 7.00</li>
          <li>4-6 articoli + CHF 3.50</li>
          <li>7 + SPEDIZIONE GRATUTITA</li>
        </ul>
      </div>
      <div className="contactcard">
        <h4>Condizioni di pagamento e di consegna</h4>
        <ul>
          <li>
            SAPONI PER TUTTI accetta i seguenti metodi di pagamento: Twint o sul
            conto IBAN
          </li>
          <li>
            Dopo aver ricevuto l’ordine, SAPONI PER TUTTI invierà una e-mail o
            messaggio (FACEBOOK/INSTAGRAM) di notifica, in cui conferma il
            ricevimento dell’ordine e ne riassume il contenuto con i vari prezzi
            di vendita.
          </li>
          <li>
            Le spedizioni vengono effettuate di Lunedì a pagamento anticipato.
          </li>
          <li>
            SAPONI PER TUTTI riserva il diritto di rifiutare di procedere alla
            vendita dei prodotti per qualsiasi ragione.
          </li>
          <li>
            Oltre ai prezzi dei prodotti si aggiungono le spese di
            spedizione(come citato sopra).
          </li>
          <li>
            Salvo diversamente concordato, la consegna avverà all’indirizzo
            indicato dal cliente.
          </li>
          <li>
            Nel caso in cui avvengono danni alla merce durante il trasporto,
            SAPONI PER TUTTI non si assume alcuna responsabilità in presenza di
            ostacoli nell’ambito delle spedizioni.
          </li>
        </ul>
      </div>
      <div className="contactcard">
        <h4>Contattaci</h4>
        <p>
          SAPONI PER TUTTI /{" "}
          <Link href="mailto:francesca.nebel@gmail.com">
            francesca.nebel@gmail.com
          </Link>
        </p>
      </div>
    </>
  );
}
