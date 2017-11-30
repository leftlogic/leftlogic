import Layout from '../../components/Layout';
import Quote from '../../components/Quote';

export default () => (
  <Layout
    title="Mobile Web Apps workshop"
    sidebars={['Upcoming', 'Newsletter']}
  >
    <h1>Mobile Web Apps</h1>
    <p>
      Building rich interactive web sites... dare I say web apps - is a reality
      with the smart phone browsers shipping with all the latest JavaScript and
      CSS technologies.
    </p>
    <p>
      This day long workshop will be a mix of introducing the latest technology
      &amp; tricks on the mobile device and hands on practical exercises where
      you'll get to play with what you're learning.
    </p>
    <p>
      Although this workshop will have an iOS focus, a lot of the technology we
      will look at applies to most new WebKit based devices (Android, Playbook,
      etc) and smartphones running Opera Mobile.
    </p>

    <Quote
      line="Remy's HTML5 for mobile workshop showed me how to do at least three things I'd previously thought were impossible."
      cite="James O'Brien"
    />

    <Quote
      line="Truly inspiring day spent with Remy on mobile stuff, time to get stuck in. Anyone got and mobile dev they need doing ;)"
      cite="Pete Hotchkin"
    />
    <h2>What you'll learn</h2>
    <ul>
      <li>
        How to take advantage of unique properties of the mobile device, using
        some of the latest technologies
      </li>
      <li>Handling and working with touch and other mobile specific events</li>
      <li>Debugging approach: going way, way beyond the bad old alert</li>
      <li>
        Working offline: storing application assets and all it's data locally to
        the device
      </li>
      <li>
        Looking at framework and libraries to speed up development and time to
        release
      </li>
      <li>
        Deployment optimisations: getting your mobile app to your user real
        quick
      </li>
    </ul>
    <h2>Prerequisites</h2>
    <ul>
      <li>
        Bring your mobile device, preferably an iPhone or iPad with the latest
        OS
      </li>
      <li>A little knowledge of CSS and JavaScript will help</li>
      <li>
        <a href="http://www.google.com/chrome">Google Chrome</a> or Safari
      </li>
      <li>
        <a href="http://nodejs.org/">Node installed</a> (make sure it's a recent
        version)
      </li>
    </ul>
  </Layout>
);
