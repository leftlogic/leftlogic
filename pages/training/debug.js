import Layout from '../../components/Layout';
import Quote from '../../components/Quote';

export default () => (
  <Layout
    title="Mastering browser devtools workshop"
    sidebars={['Upcoming', 'Newsletter']}
  >
    <h1>Mastering browser devtools</h1>
    <p>
      Sure, you've moved past <code>alert</code> debugging and discovered{' '}
      <code>console.log</code>, but did you know you can replay XHR requests
      instead of having to repeat your steps to make the request? Or that you
      can proxy your local server through a browser configuration so your mobile
      phone can see it? This workshop is dedicated to learning the native
      developer tools baked in to the browser to make our life a little more
      bearable.
    </p>
    <p>
      We will primarily look at the debugging features of Chrome DevTools and
      those concepts that apply to other browsers. We'll also look at remote
      mobile debugging using native tools and also look at the alternative tools
      where native support isn't available.
    </p>
    <p>
      The workshop will mostly be about the foundation of debugging techniques,
      which apply way beyond just a single browser's debugger tool, but will
      raise your expectation of all web debugging environments.
    </p>
    <Quote
      line="Solid pragmatic immense knowledge about...like anything you would throw at him. Easy to change his plans to respond to the audience interests."
      cite="Booking.com"
    />
    <Quote
      line="Learnt a ton in @rem's debugging workshop yesterday. Eager to put it into use!"
      cite="Mark Perkins"
    />
    <h2>What you'll learn</h2>
    <ul>
      <li>
        <strong>Workflow</strong>: How to make DevTools your development IDE
      </li>
      <li>
        <strong>Console</strong>: Power features beyond <code>console.log</code>
      </li>
      <li>
        <strong>Memory</strong>: How to identify, diagnose and remediate memory
        leaks in the wild
      </li>
      <li>
        <strong>Mobile</strong>: Using the tools you know to debug tiny machines
      </li>
      <li>
        <strong>Network</strong>: What's slow, why and the detail behind a
        request
      </li>
      <li>
        <strong>Performance</strong>: How to read and investigate rendering
        issues
      </li>
      <li>
        <strong>Application</strong>: You'll apply these new skills directly to
        live websites
      </li>
    </ul>

    <h2>What do I need for this workshop?</h2>
    <ul>
      <li>A laptop with a decent code editor (Sublime, VS Code, etc)</li>
      <li>
        <a href="http://www.google.com/chrome">Google Chrome</a> and{' '}
        <a href="http://www.google.co.uk/intl/en/chrome/browser/canary.html">
          Google Canary
        </a>
      </li>
      <li>
        <a href="http://nodejs.org/">Node installed</a> (make sure it's a recent
        version)
      </li>
    </ul>
  </Layout>
);
