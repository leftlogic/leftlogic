import { useState } from 'react';
import Layout from '../components/Layout';

export default () => {
  const [email, setEmail] = useState('');
  return (
    <Layout title="Contact Left Logic" sidebars={['Newsletter', 'Terminal']}>
      <h1>Contact</h1>
      <form
        method="post"
        action="https://formspree.io/info@leftlogic.com"
        className="form">
        <input
          type="hidden"
          name="_next"
          value="https://leftlogic.com/thanks"
        />
        <input
          type="hidden"
          name="_subject"
          value="Contact from leftlogic.com"
        />
        <input type="hidden" name="_replyto" value={email} />

        <input type="hidden" name="_format" value="plain" />
        <p>All enquires are read and remain private.</p>
        <div className="fields">
          <label htmlFor="form_name">Name</label>
          <input name="name" id="form_name" type="text" />
        </div>
        <div className="fields">
          <label htmlFor="form_email">Email*</label>
          <input
            required="required"
            name="email"
            id="form_email"
            type="email"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </div>
        <div className="fields">
          <label htmlFor="form_message">Message*</label>
          <textarea
            required="required"
            minLength="20"
            rows="7"
            name="message"
            id="form_message"
          />
        </div>
        <div className="fields">
          <button type="submit" className="button">
            Send feedback
          </button>
        </div>
      </form>
    </Layout>
  );
};
