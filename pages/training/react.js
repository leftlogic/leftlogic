import Layout from '../../components/Layout';
import Quote from '../../components/Quote';

export default () => (
  <Layout
    title="Modern Universal React dev with Next.js"
    sidebars={['Upcoming', 'Newsletter']}
  >
    <h1>Modern Universal React dev with Next.js</h1>
    <p>
      Next.js is a framework for building React applications with automatic
      server side rendering support, which results in improved performance over
      "vanilla" React. The framework also offers zero configuration, automatic
      code splitting and prefech out of the box.
    </p>

    <p>
      You will be expected to be comfortable with JavaScript, and be familiar
      with, or at least comfortable with the JSX concepts (putting XML inside
      your JavaScript). We'll also be using Node 8 as we'll make use of
      async/await.
    </p>

    <h2>Outcomes</h2>
    <ul>
      <li>How to create and configure next Next based projects</li>
      <li>Experience with latest JavaScript features, including async/await</li>
      <li>Exposure to some gotchas</li>
      <li>
        How to handle special cases around server/client side only and using
        environment variables
      </li>
      <li>Custom routing and parameter handling</li>
    </ul>

    <h2>From previous attendees</h2>

    <Quote
      line="Remy's workshop was excellent. Expertly filling in the blanks on using Next.js in the wild."
      cite="Tim Reed / Hugo & Cat"
    />

    <Quote
      line="The workshop on Next.js was very informative and covered a full project build (integration, testing and build) in the space of a single day! Taught through a number of defined snapshots (Git tags), it was very easy to follow how such a project could be implemented."
      cite="Ian Ovenden / Wiley"
    />

    <Quote
      line="I really enjoyed Remy's Next.js workshop. It was easy enough to follow without issues and challenging enough to realise it's potential and try bringing it to my company."
      cite="Andre Dargains / Fullsix Portugal"
    />

    <h2>What will be covered?</h2>
    <ul>
      <li>
        <strong>Up and running: application architecture</strong>: Create your
        first fully SSR Next.js application. Compose layouts and head elements.
      </li>
      <li>
        <strong>Extending: custom routing, parameters</strong>: Clean and custom
        URLs, mapping params, environment variables, and more.
      </li>
      <li>
        <strong>Connecting: Database backed pages</strong>: Beyond the code:
        dynamic data and securing pages.
      </li>
      <li>
        <strong>Testing, building & deploying</strong>: Tests & fixtures with
        Jest, gotchas, and deploy strategies.
      </li>
    </ul>
    <h2>Who is this workshop for?</h2>
    <p>
      You will be expected to be comfortable with JavaScript, and be familiar
      with, or at least comfortable with the JSX concepts (putting XML inside
      your JavaScript). We'll also be using the latest stable node as we'll make
      use of async/await.
    </p>
  </Layout>
);
