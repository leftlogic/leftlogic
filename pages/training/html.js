import Layout from '../../components/Layout';
import Quote from '../../components/Quote';

export default () => (
  <Layout
    title="Mastering browser devtools workshop"
    sidebars={['Upcoming', 'Newsletter']}
  >
    <h1>Using HTML5 and JavaScript to build Web Apps</h1>
    <p>
      HTML5 has gained a lot of attention over the last 12 months. With browsers
      increasingly supporting the features of the vast JavaScript APIs both in
      and around the official HTML5 spec, it's making the job of creating
      awesome applications purely using these web technologies very easy indeed.
    </p>
    <p>
      This full day workshop will introduce you to HTML5 with a brief backstory,
      before diving into the APIs one by one. As well as going through code and
      showing practical demonstrations, where possible, we'll also talk about
      the alternatives for old browsers that don't support &quot;awesome&quot;
      out of the box.
    </p>

    <Quote
      line="Awesome day! Thank you so much Remy for a fantastic workshop! :) looking forward to using my new knowledge!"
      cite="Stuart Elmore"
    />

    <Quote
      line="The workshop with @rem today was awesome! Learned a bunch and am genuinely excited to use new tech."
      cite="Corey Dunston"
    />

    <h2>What will be covered?</h2>
    <ul>
      <li>
        <strong>Video &amp; audio</strong> – move over Flash
      </li>
      <li>
        <strong>Canvas</strong> – bring on the Mario games
      </li>
      <li>
        <strong>Storage</strong> – like cookies, but tastes so much better
      </li>
      <li>
        <strong>Offline</strong> – forget the web
      </li>
      <li>
        <strong>Geolocation</strong> – finders keepers
      </li>
      <li>
        <strong>Web Workers</strong> – multithreading for the browser
      </li>
      <li>
        <strong>Web Sockets</strong> – pushing data was never so easy
      </li>
    </ul>
    <h2>Who is this workshop for?</h2>
    <p>
      You're not expected to have played with HTML5 just yet, but you will need
      to have a reasonable understanding of HTML &amp; JavaScript. A lot of the
      individual APIs are being used in popular web sites today both in desktop
      browsers and mobile, so rest assured that this applies to developers that
      are working on the web <em>today</em>.
    </p>
  </Layout>
);
