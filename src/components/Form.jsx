export default function Form() {
  return (
    <form>
      <div className="form-input">
        <label htmlFor="name">Fulde navn</label>
        <input
          id="name"
          name="name"
          type="text"
          required
        />
      </div>
      
      <div className="form-input">
        <label htmlFor="email">Din email</label>
        <input
          id="email"
          name="email"
          type="email"
          required
        />
      </div>

      <div className="form-input">
        <label htmlFor="phone">Dit telefonnummer</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
        />  
      </div>

      <div className="form-input">
        <label htmlFor="inquiry">Beskriv din henvendelse.</label>
        <textarea
          id="inquiry"
          name="inquiry"
          required
        />
      </div>

      <button type="submit">Indsend</button>
    </form>
  );
}