import React from 'react';
import styled from 'styled-components';
import { FaCalendarAlt, FaPenAlt } from "react-icons/fa";
import { Helmet } from 'react-helmet';

const CVLink = styled.a`
  color: #e85d4e;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.8rem;
  height: 30px;
  cursor: pointer;
  font-size: 1rem;
  background-color: #F3F3F3;
  border-radius: 8px;
  margin: 0 5px;
  box-sizing: border-box;

  &:hover {
    color: #787878;
  }

  &.active {
    color: #e85d4e;
  }

  @media screen and (max-width: 320px) {
    padding: 0 0.5rem;
    font-size: 0.9rem;
  }
`;

const Chi2026 = () => {
  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        margin: '0 auto',
        maxWidth: '800px',
        padding: '0 20px',
        fontFamily: 'Nunito Sans, sans-serif',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        backgroundColor: 'white',
        minHeight: '80vh',
        marginTop: '30px',
      }}
    >
      <Helmet>
        <meta name="robots" content="nosnippet" />
      </Helmet>

      <style>
        {`
          .tooltip:hover .tooltiptext {
            visibility: visible;
          }
          @media (max-width: 767px) {
            div.container {
              flex-direction: column;
              align-items: flex-start;
              text-align: left;
            }

            div.container img {
              width: 100%;
              margin-bottom: 20px;
              margin-right: 0;
            }

            .copy-right {
              margin-top: 20px;
              margin-bottom: 2em;
              position: static;
            }
          }

          @media (min-width: 768px) {
            div.container h1 {
              margin-top: -5em;
            }
          }

          .icon-wrapper a {
            color: #787878;
            margin: 5px;
            transition: color 0.3s ease-in-out;
          }

          .icon-wrapper a:hover {
            color: #e85d4e;
          }

          .coral-link {
            color: #e85d4e;
            transition: color 0.3s ease-in-out;
          }

          .coral-link:hover,
          .coral-link:active {
            color: #7C7C7C;
          }

          .tooltip {
            position: relative;
            display: inline-block;
            cursor: pointer;
          }
          
          .tooltip .tooltiptext {
            visibility: hidden;
            width: 200px;
            background-color: white;
            color: #7C7C7C;
            text-align: center;
            border-radius: 6px;
            padding: 5px 10px;
            position: absolute;
            z-index: 1;
            bottom: 125%;
            left: 50%;
            margin-left: -100px;
            box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.2);
            font-size: 10px;
          
            &::after {
              content: "";
              position: absolute;
              top: 100%; 
              left: 50%;
              margin-left: -5px;
              border-width: 5px;
              border-style: solid;
              border-color: white transparent transparent transparent;
            }
          }
          
          .tooltip:hover .tooltiptext {
            visibility: visible;
          }
        `}
      </style>

      <div style={{ marginBottom: '30px' }}>
        <div
          style={{
            fontSize: '16px',
            fontWeight: '300',
            color: '#7C7C7C',
            lineHeight: '1.4',
            marginTop: '1vh',
            marginBottom: '30px'
          }}
        >
          <span style={{ fontWeight: 'bold', fontSize: '20px' }}>my first chi</span>
          <div style={{ marginBottom: '5px' }}></div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', fontSize: '12px' }}>
              <FaCalendarAlt size={12} color="#7C7C7C" />
              <span style={{ marginLeft: '8px', marginRight: '20px' }}>Apr 30 2026</span>
              <FaPenAlt size={12} color="#7C7C7C" />
              <span style={{ marginLeft: '8px' }}>By Yumeng Ma</span>
            </div>
          </div>
          <div style={{ marginBottom: '20px' }}></div>

          This was my first time at CHI, and I left with much more mixed feelings than I expected. I am grateful I got to present my work. I am happy I went. But the whole experience felt messier, stranger, and lonelier than the polished academic fantasy I built in my head.
          <br />
          <br />
          A week in Barcelona for the biggest HCI conference sounds glamorous until you are sick the entire time, carrying cough drops everywhere, trying not to cough during your own presentation, buying three different kinds of cough medicine (praying one actually works), and dealing with bug bites like that was somehow part of the conference package.
          <br />
          <br />
          What surprised me most was how hard CHI was to enter socially (my advisor had warned me about this in advance). Everyone says conferences are for meeting people, and technically, yes, there are people everywhere. Talks, posters, receptions, coffee breaks, meetups, hallway conversations. Yet, there is a difference between being surrounded by people and actually knowing how to enter a community.
          <br />
          <br />
          CHI felt less like one community and more like many small circles moving through the same venue. People clustered by university, lab, advisor network, previous CHI friendships, and nationality. I noticed how many Chinese international students naturally found each other and moved through the conference together. I understand why that happens. It is comforting to find a smaller circle when the larger conference feels too vague to hold onto. But it also made me think about how ungrounded belonging can be at CHI. Some people arrive already visible. Their advisor is known. Their lab is known. Their name has already floated around before they even walk into the room. Other people have a badge and a paper and are still basically invisible.
          <br />
          <br />
          For a field that studies interaction, participation, access, and community, the actual conference experience still depends a lot on whether you already know people. A first-time attendee meetup is not enough. A giant reception is not enough. Telling people to “network” is not enough. Sometimes sending someone a careful email or setting up a one-on-one Zoom feels more humane than trying to catch them between sessions while they are already half-walking away with five people they know.
          <br />
          <br />
          I do not think this is anyone’s fault. People want to see their friends. People want to stay with the groups that make them feel safe. But CHI should stop pretending that putting people in the same building automatically creates community. It creates proximity. That is not the same thing as connection. Future CHIs could think much more seriously about what it means to help first-time attendees, junior researchers, and people outside established networks become easier to find, approach, and remember.
          <br />
          <br />
          I also kept thinking about how young a lot of people seemed. There were PhD students, master’s students, and undergraduates presenting work, and that made CHI feel less formal than I imagined. This is not a bad thing. It is exciting that younger researchers can contribute so early. But it also changes the atmosphere. CHI no longer feels like a distant stage for established scholars only. It feels like a huge, fast-moving academic ecosystem, with people learning how to perform research, build identity, and become legible to the field in real time. That can be energizing, but it can make the conference seem like a social and professional marketplace instead of a place for slower intellectual exchange.
          <br />
          <br />
          The same showed up in the papers and presentations. I do not mean the work was bad. A lot of it was rigorous, polished, careful, and well written. But I kept thinking that much of it was also very safe. Familiar problem. Familiar method. Familiar framing. Familiar design implications. A paper that makes sense. A paper that will not embarrass anyone. A paper that can survive review.
          <br />
          <br />
          Is this what we want CHI to become? A place that rewards work because it is difficult to object to?
          <br />
          <br />
          I kept waiting to feel surprised. Sometimes I was. Just not as much as I wanted to be. For a conference this large, in a field supposedly about the future of interaction, I expected more work that made me think, “Wait, I have not seen the world this way before.” Instead, some work felt like it had learned the CHI template too well. Familiar question. Familiar method. Familiar framing. It had a study, though in a few cases I did wonder how an N = 12 somehow survived the journey all the way to publication. It had themes. It had implications. A pretty little bow. But I was not moved.
          <br />
          <br />
          Maybe this is harsh, but I think CHI has a safety problem. People are not doing bad research, but the field is becoming very good at producing acceptable research. And acceptable research is not the same as interesting research. A paper can be methodologically sound and still not say much. A paper can have a beautiful narrative and still leave the field exactly where it was.
          <br />
          <br />
          AI makes this even more awkward. AI was everywhere at CHI. Papers about AI. Systems using AI. Study materials formed by AI. Images generated by AI. Code scaffolded by AI. Probably writing polished by AI. That is also not automatically bad. The problem is that AI is no longer just a topic we study. It is becoming part of how research gets made.
          <br />
          <br />
          And I do not think we are being honest enough about that.
          <br />
          <br />
          It is one thing to write papers about how users interact with AI systems. It is another thing to ask how AI is changing the researchers, designers, and students producing those papers. If people use AI to brainstorm, write, code, summarize, revise, generate images, and build prototypes, then what exactly is changing in the work? What is being gained? What becomes faster but less personal? What becomes more polished but less authored and authentic?
          <br />
          <br />
          This is why I keep thinking about an “AI deprivation” study. Not another study asking whether AI helps people complete a task better. We already have endless versions of that. I mean, take people who normally rely on AI and remove it. Ask researchers, designers, students, or developers to complete the same task with AI and without AI. What breaks? What slows down? What gets worse? What gets better? Do people lose confidence? Do they get bored? Do they become more careful? Do they produce less polished work but more original work? Do they realize they have outsourced parts of their own judgment?
          <br />
          <br />
          We keep asking how humans can collaborate and coexist with AI, but maybe we should also ask what kind of humans are being produced through constant AI assistance. If AI is now part of writing, designing, coding, reviewing, and thinking, then the unit we are studying is not simply “a user using a tool.” It is a person whose workflow, patience, taste, and confidence may already be influenced by that tool.
          <br />
          <br />
          This also makes me wonder whether CHI is getting stuck between academia and industry. Industry is moving extremely fast. Models change, tools change, workflows change, products change. By the time a CHI paper goes from idea to study to submission to publication, the system it studies may already feel old. The paper is not useless, but it does create a weird lag. Sometimes I look at AI papers and wonder….is this about human behavior, or is this about one temporary version of one model at one temporary moment?
          <br />
          <br />
          This is the part I wish CHI could confront. If the field keeps moving at the same publication pace, with the same paper template, while the technologies it studies mutate every few months, then future CHIs may keep feeling slightly behind. Careful, yes. Rigorous, yes….and well, behind.
          <br />
          <br />
          So what should future CHIs look like? I do not think the answer is more AI papers. Please no. We already have enough papers that attach AI to a familiar task and label it a contribution. I think future CHIs need more work that asks challenging questions about the conditions around AI like dependency, authorship, judgment, taste, deskilling, speed, attention, and what happens when people can no longer tolerate thinking without assistance.
          <br />
          <br />
          Future CHIs also need riskier formats. More unfinished ideas. More debates. More work that is allowed to be whimsical before it becomes polished. More systems that took years to build, even if they cannot be evaluated through a cute little study. More papers that try to change the question, not just answer a question everyone already knows how to ask.
          <br />
          <br />
          I do not regret going. I am glad I went. I saw good work. I met people I liked. I felt, maybe for the first time, the actual size of the field I am entering. But I also left with the sense that CHI is at a strange point. It is powerful and prestigious. And at risk of becoming too good at producing the kind of research it already knows how to accept.
          <br />
          <br />
          Maybe that is what bothered me most. CHI is supposed to be about the future of human-computer interaction. But at times, it felt more like a field rehearsing its own format.
          <br />
          <br />
          I want future CHIs to feel less like that. Less safe. Less socially opaque. More alive. More willing to admit that AI is not only changing users, but also changing us. More willing to ask whether the way we produce research is still fit for the world we are studying.
        </div>
      </div>

      <div
        style={{
          position: 'relative',
          bottom: '30px',
          fontSize: '12px',
          color: '#7C7C7C',
          marginTop: '30px',
          marginBottom: '30px'
        }}
      >
        Slice of life 🍰
      </div>

      <div
        className="copy-right"
        style={{
          fontSize: '12px',
          color: '#7C7C7C',
          textAlign: 'center',
          marginTop: '20px',
          position: 'absolute',
          bottom: '10px',
          width: '100%',
          borderTop: '1px solid white',
          marginBottom: '10px',
          zIndex: '20',
        }}
      >
        Potayto Workshop by Yumeng Ma
      </div>
    </div>
  );
};

export default Chi2026;