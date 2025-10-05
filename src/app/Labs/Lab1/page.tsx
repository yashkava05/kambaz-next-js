"use client";

import Link from "next/link";
import Image from "next/image";

export default function Lab1() {
  return (
    <div id="wd-lab1">
      <h1>Web Development Labs - CS5610</h1>
      <h2>Yash Kava - Section 04</h2>
      
      <hr />
      
      <h3>Navigation</h3>
      <ul>
        <li><Link href="/Labs/Lab1" id="wd-lab1-link">Lab 1: HTML Examples</Link></li>
        <li><Link href="/Labs/Lab2" id="wd-lab2-link">Lab 2: CSS Basics</Link></li>
        <li><Link href="/Labs/Lab3" id="wd-lab3-link">Lab 3: JavaScript Fundamentals</Link></li>
        <li><Link href="/" id="wd-kambaz-link">Kambaz Application</Link></li>
        <li><a href="https://github.com/yashkava05/kambaz-next-js" id="wd-github" target="_blank" rel="noreferrer">GitHub Repository</a></li>
      </ul>

      <hr />

      <h2>Lab 1</h2>
      <h3>HTML Examples</h3>
      
      <div id="wd-h-tag">
        <h4>Heading Tags</h4>
        Text documents are often broken up into several sections and subsections. Each section is usually prefaced with a short title or heading that attempts to summarize the topic of the section it precedes. For instance this paragraph is preceded by the heading Heading Tags. The font of the section headings are usually larger and bolder than their subsection headings. This document uses headings to introduce topics such as HTML Documents, HTML Tags, Heading Tags, etc. HTML heading tags can be used to format plain text so that it renders in a browser as large headings. There are 6 heading tags for different sizes: h1, h2, h3, h4, h5, and h6. Tag h1 is the largest heading and h6 is the smallest heading.
      </div>

      <div id="wd-p-tag">
        <h4>Paragraph Tag</h4>
        <p id="wd-p-1">
          This is the first paragraph. The paragraph tag is used to format vertical gaps between long pieces of text like this one.
        </p>
        <p id="wd-p-2">
          This is the second paragraph. Even though there is a deliberate white gap between the paragraph above and this paragraph, by default browsers render them as one contiguous piece of text as shown here on the right.
        </p>
        <p id="wd-p-3">
          This is the third paragraph. Wrap each paragraph with the paragraph tag to tell browsers to render the gaps.
        </p>
      </div>

      <div id="wd-lists">
        <h4>List Tags</h4>
        <h5>Ordered List Tag - How to make pancakes:</h5>
        <ol id="wd-pancakes">
          <li>Mix dry ingredients</li>
          <li>Add wet ingredients</li>
          <li>Stir to combine</li>
          <li>Heat a skillet or griddle</li>
          <li>Pour batter onto the skillet</li>
          <li>Cook until bubbly on top</li>
          <li>Flip and cook the other side</li>
          <li>Serve and enjoy!</li>
        </ol>

        <h5>My favorite recipe</h5>
        <ol id="wd-your-favorite-recipe">
          <li>Boil pasta in salted water</li>
          <li>Prepare sauce with garlic and tomatoes</li>
          <li>Drain pasta and mix with sauce</li>
          <li>Top with parmesan cheese</li>
        </ol>

        <h5>Unordered List Tag</h5>
        <p>My favorite books (in no particular order):</p>
        <ul id="wd-my-books">
          <li>Dune</li>
          <li>Lord of the Rings</li>
          <li>Ender&apos;s Game</li>
          <li>Red Mars</li>
          <li>The Forever War</li>
        </ul>

        <p>Your favorite books:</p>
        <ul id="wd-your-books">
          <li>The Alchemist</li>
          <li>1984</li>
          <li>To Kill a Mockingbird</li>
        </ul>
      </div>

      <div id="wd-tables" style={{ marginTop: 16 }}>
        <h4>Table Tag</h4>
        <table border={1} width="100%">
          <thead>
            <tr>
              <th>Quiz</th>
              <th>Topic</th>
              <th>Date</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Q1</td><td>HTML</td><td>02/03/21</td><td>85</td></tr>
            <tr><td>Q2</td><td>CSS</td><td>02/10/21</td><td>90</td></tr>
            <tr><td>Q3</td><td>JavaScript</td><td>02/17/21</td><td>95</td></tr>
            <tr><td>Q4</td><td>Python</td><td>02/24/21</td><td>88</td></tr>
            <tr><td>Q5</td><td>Java</td><td>03/03/21</td><td>92</td></tr>
            <tr><td>Q6</td><td>TypeScript</td><td>03/10/21</td><td>91</td></tr>
            <tr><td>Q7</td><td>Rust</td><td>03/17/21</td><td>89</td></tr>
            <tr><td>Q8</td><td>SpringBoot</td><td>03/24/21</td><td>87</td></tr>
            <tr><td>Q9</td><td>MongoDB</td><td>03/31/21</td><td>93</td></tr>
            <tr><td>Q10</td><td>Backend</td><td>04/07/21</td><td>94</td></tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3}>Average</td>
              <td>90</td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div id="wd-images" style={{ marginTop: 16 }}>
        <h4>Image Tag</h4>
        <p>Loading an image from the internet:</p>
        <img 
          id="wd-starship" 
          width={400}
          src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
          alt="Starship"
        />
        <br />
        <p>Loading a local image:</p>
        <Image id="wd-teslabot" src="/images/walle.jpg" height={200} width={200} alt="Tesla Bot" />
      </div>

      <div id="wd-forms" style={{ marginTop: 16 }}>
        <h4>Form Elements</h4>
        <form id="wd-text-fields">
          <h5>Text Fields</h5>
          <label htmlFor="wd-text-fields-username">Username:</label><br />
          <input id="wd-text-fields-username" type="text" placeholder="jdoe" /><br />

          <label htmlFor="wd-text-fields-password">Password:</label><br />
          <input id="wd-text-fields-password" type="password" defaultValue="123@#$asd" /><br />

          <label htmlFor="wd-text-fields-first-name">First name:</label><br />
          <input id="wd-text-fields-first-name" type="text" title="John" /><br />

          <label htmlFor="wd-text-fields-last-name">Last name:</label><br />
          <input id="wd-text-fields-last-name" type="text" placeholder="Doe" defaultValue="Wonderland" title="The last name" /><br />

          <h5>Text boxes</h5>
          <label>Biography:</label><br />
          <textarea id="wd-textarea" cols={30} rows={10}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </textarea>

          <h5 id="wd-buttons">Buttons</h5>
          <button type="button" onClick={() => alert("Life is Good!")} id="wd-all-good">
            Hello World!
          </button>

          <h5 id="wd-radio-buttons">Radio buttons</h5>
          <label>Favorite movie genre:</label><br />
          <input type="radio" name="radio-genre" id="wd-radio-comedy" />
          <label htmlFor="wd-radio-comedy">Comedy</label><br />
          <input type="radio" name="radio-genre" id="wd-radio-drama" />
          <label htmlFor="wd-radio-drama">Drama</label><br />
          <input type="radio" name="radio-genre" id="wd-radio-scifi" />
          <label htmlFor="wd-radio-scifi">Science Fiction</label><br />
          <input type="radio" name="radio-genre" id="wd-radio-fantasy" />
          <label htmlFor="wd-radio-fantasy">Fantasy</label>

          <h5 id="wd-checkboxes">Checkboxes</h5>
          <label>Favorite movie genre:</label><br />
          <input type="checkbox" name="check-genre" id="wd-chkbox-comedy" />
          <label htmlFor="wd-chkbox-comedy">Comedy</label><br />
          <input type="checkbox" name="check-genre" id="wd-chkbox-drama" />
          <label htmlFor="wd-chkbox-drama">Drama</label><br />
          <input type="checkbox" name="check-genre" id="wd-chkbox-scifi" />
          <label htmlFor="wd-chkbox-scifi">Science Fiction</label><br />
          <input type="checkbox" name="check-genre" id="wd-chkbox-fantasy" />
          <label htmlFor="wd-chkbox-fantasy">Fantasy</label>

          <h4 id="wd-dropdowns">Dropdowns</h4>
          <h5>Select one</h5>
          <label htmlFor="wd-select-one-genre">Favorite movie genre: </label><br />
          <select id="wd-select-one-genre">
            <option value="COMEDY">Comedy</option>
            <option value="DRAMA">Drama</option>
            <option value="SCIFI" selected>Science Fiction</option>
            <option value="FANTASY">Fantasy</option>
          </select>

          <h5>Select many</h5>
          <label htmlFor="wd-select-many-genre">Favorite movie genres: </label><br />
          <select multiple id="wd-select-many-genre">
            <option value="COMEDY" selected>Comedy</option>
            <option value="DRAMA">Drama</option>
            <option value="SCIFI" selected>Science Fiction</option>
            <option value="FANTASY">Fantasy</option>
          </select>

          <h4>Other HTML field types</h4>
          <label htmlFor="wd-text-fields-email">Email: </label>
          <input type="email" id="wd-text-fields-email" placeholder="jdoe@somewhere.com" /><br />

          <label htmlFor="wd-text-fields-salary-start">Starting salary:</label>
          <input type="number" id="wd-text-fields-salary-start" defaultValue="100000" placeholder="1000" /><br />

          <label htmlFor="wd-text-fields-rating">Rating: </label>
          <input type="range" id="wd-text-fields-rating" defaultValue="4" max="5" placeholder="Doe" /><br />

          <label htmlFor="wd-text-fields-dob">Date of birth: </label>
          <input type="date" id="wd-text-fields-dob" defaultValue="2000-01-21" /><br />
        </form>
      </div>

      <div id="wd-anchor-tag" style={{ marginTop: 16 }}>
        <h4>Anchor tag</h4>
        Please <a id="wd-lipsum" href="https://www.lipsum.com">click here</a> to get dummy text<br />
      </div>
    </div>
  );
}