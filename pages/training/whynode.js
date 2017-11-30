import Layout from '../../components/Layout';
import Quote from '../../components/Quote';

export default () => (
  <Layout title="Why a node workshop?">
    <h1>Why Your Boss Should Send You to the Node Workshop</h1>
    <h4>
      The web used to be static. Single page, click, reload. Then came Ajax and
      we embraced it. The web was now dynamic. We've moved on. Our expectations
      are higher, we want information in an instant. The web has moved on to{' '}
      <strong>real-time</strong>.
    </h4>
    <p>
      Adding real-time to your application either requires insane talent that
      understands Comet... or you look at how Node.js and native HTML5 browser
      technology can do this for you.
    </p>
    <p>
      Making use of WebSockets is easy enough, but without the server technology
      you have nothing.
    </p>
    <p>
      This workshop, along with covering the fundamentals of how Node works and
      how web servers work, walks through how simple it is to use Node to create
      real-time servers.
    </p>
    <h2>
      Is Node <em>too</em> new?
    </h2>
    <p>
      Is Node too new for your company? Well, Microsoft, Ebay, Linked and Yahoo!
      to name a few, are all using Node in production. It's cross platform, so
      that means is the same code and development experience whether you prefer
      to code on Windows on a Mac or on a Linux flavoured machine.
    </p>
    <p>
      This workshop will give you the tools you need to add real-time services
      to your application from day one.
    </p>
    <h2>Previously</h2>
    <p>Here's what past attendees have said about the workshop:</p>

    <Quote
      line="Great and hard workshop of #nodejs with @rem in #ffconf I'm happy with all I've learnt and ready to fix my #websocket server."
      url="https://twitter.com/#!/Leo_lopezg/status/134710675414073345"
      cite="Leandro Lopez"
    />

    <Quote
      line="Awesome Node.js workshop in Nottingham today with @peteduncanson + others, provided by @rem - great to meet everyone, learnt loads #nodejs"
      url="https://twitter.com/#!/pinksy/status/69103867882770432"
      cite="@pinksy"
    />

    <Quote
      line="Thanks @rem and @julieanne for a gosh darn brilliant day of Node in Nottingham. Easily worth 5 hours of driving :)"
      url="https://twitter.com/#!/edvanbeinum/status/69164673068580864"
      cite="Ed van Beinum"
    />

    <Quote
      line="Today's workshop was excellent, it's got me really excited about JavaScript again."
      cite="Matt Smith"
    />

    <Quote
      line="Get from dev zero to node hero with a workshop by Remy. More learning in two days than you thought you could take (and still remember it!)"
      cite="Leigh Garland"
      url="https://twitter.com/#!/toychicken/status/156440185981243393"
    />
  </Layout>
);
