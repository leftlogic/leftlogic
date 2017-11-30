import Layout from '../../components/Layout';
import Quote from '../../components/Quote';

export default () => (
  <Layout
    title="Node up and running workshop"
    sidebars={['Upcoming', 'Newsletter']}
  >
    <h1>Node: Knowledge Smash &amp; Grab</h1>
    <p>
      Remy has run sell out Node workshops for a couple of years now, and this
      workshop is a fully packed day of material and exercises to get you up and
      running quickly with all the fundamentals you need to create your Node
      backed application.
    </p>
    <p>
      Need to convince your boss?{' '}
      <a href="/training/whynode">Here's an outline to help</a>.
    </p>
    <Quote
      line="Today's workshop was excellent, it's got me really excited about JavaScript again."
      cite="Matt Smith"
    />
    <Quote
      line="Get from dev zero to node hero with a workshop by Remy. More learning in two days than you thought you could take (and still remember it!)"
      cite="Leigh Garland"
    />
    <h2>What you'll learn</h2>
    <ul>
      <li>Up and running in 5 minutes</li>
      <li>
        Getting past the basics: modules, static servers, application servers
      </li>
      <li>Adding real-time: websockets</li>
      <li>Workflow tools for running and debugging</li>
      <li>Datastores with Mongo &amp; Mongoose</li>
      <li>Dependencies with npm</li>
      <li>
        Hands on advice for:
        <ul>
          <li>publishing to github</li>
          <li>publishing to npm</li>
          <li>configuring for development</li>
          <li>deploying to servers</li>
        </ul>
      </li>
    </ul>
    <h2>2 day option available</h2>
    <h3>Day 1: An introduction to Node</h3>
    <ul>
      <li>
        The basics: Async development, modules, requires, exports and scope
      </li>
      <li>Debugging techniques</li>
      <li>Building web servers: by hand, with Connect, with Express.js</li>
      <li>Repo control, deploying using npm and release tips</li>
    </ul>
    <h3>Day 2: Using HTML5 tech with Node</h3>
    <ul>
      <li>Going real time: WebSockets and Socket.IO</li>
      <li>Building WebSockets from scratch and using Socket.IO</li>
      <li>Using WebSockets in the browser, with and without support</li>
      <li>
        Server sent events and long polling: building the server and clients
      </li>
    </ul>
    <h2>What you need for this workshop?</h2>
    <ul>
      <li>
        <a href="http://nodejs.org/">Node installed</a> (make sure it's a recent
        version)
      </li>
      <li>
        Ideally have{' '}
        <a href="http://help.github.com/git-installation-redirect/">
          git installed
        </a>{' '}
        &amp; a <a href="http://github.com/">github</a> account.
      </li>
      <li>A text editor (Sublime Text, TextMate, Coda, Textpad++, etc)</li>
      <li>
        A browser with latest technology baked in, like{' '}
        <a href="http://www.google.com/chrome">Google Chrome</a> for instance
      </li>
    </ul>
  </Layout>
);
