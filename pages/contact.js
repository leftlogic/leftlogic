import Layout from '../components/Layout';

export default () => {
  return (
    <Layout title="Contact Left Logic" sidebars={['Newsletter', 'Terminal']}>
      <h1>Contact</h1>
      <form
        method="post"
        action="https://formspree.io/info@leftlogic.com"
        class="form"
      >
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

        <input type="hidden" name="_format" value="plain" />
        <p>All enquires are read and remain private.</p>
        <div class="fields">
          <label for="form_name">Name</label>
          <input name="name" id="form_name" type="text" />
        </div>
        <div class="fields">
          <label for="form_email">Email*</label>
          <input
            required="required"
            name="email"
            id="form_email"
            type="email"
          />
        </div>
        <div class="fields">
          <label for="form_message">Message*</label>
          <textarea
            required="required"
            minLength="20"
            rows="7"
            name="message"
            id="form_message"
          />
        </div>
        <div class="fields">
          <button type="submit" class="button">
            Send feedback
          </button>
        </div>
      </form>
    </Layout>
  );
};
