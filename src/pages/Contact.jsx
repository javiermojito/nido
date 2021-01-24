import React from "react";
import { Link } from "react-router-dom";
import { usePurpleBody } from "../hooks/usePurpleBody";

const Contact = () => {
  usePurpleBody();
  return (
    <div className="h-full bg-purpleNido pb-32">
      <div className="bg-whiteNido pt-10">
        {/* Person */}
        <div className="flex flex-col w-full h-auto text-center pb-8 tracking-tighter">
          <img
            className="h-44 w-44 rounded-full mx-auto mx-auto border-solid border-4 border-black border-opacity-90"
            src="https://i.imgur.com/XRTBACL.jpg"
            alt=""
          />

          <blockquote>
            <p className="font-poppins font-semibold text-2xl pt-6 leading-7">
              Nido es un proyecto de
              <br />
              <a
                className="text-purpleNido font-bold"
                href="http://javiermojito.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Javier Mojito
              </a>
            </p>
          </blockquote>
        </div>

        {/* Email */}
        <div className="w-full h-auto tracking-tighter pb-8">
          <p className="text-center font-poppins font-semibold leading-7 text-xl pl-4 pr-4">
            Cualquiera cosa, hablamos por Email ✌
            <br />
            <a
              className="text-blueNido"
              href="mailto:work@javiermojito.com?subject=Nido%20%7C%20Friendly%20Email&body=Hi%2C%20i%20want%20to%20talk%20about%20Nido."
            >
              work@javiermojito.com
            </a>
          </p>
        </div>

        {/* Media */}
        <div className="w-full h-auto text-center flex flex-col col-1 justify-center content-center pb-6">
          <h3 className="font-poppins font-bold text-2xl pb-2">
            Sigue a Nido en
          </h3>
          <div className="flex flex-row gap-x-1 justify-center content-center">
            {/* Instagram */}
            <a
              href="https://instagram.com/cursos.nido"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="h-10 w-10"
                alt="svgImg"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzAiIGhlaWdodD0iMzAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2U1N2I3YiI+PHBhdGggZD0iTTg2LDExLjQ2NjY3Yy00MS4wOTY1MywwIC03NC41MzMzMywzMy40MzY4IC03NC41MzMzMyw3NC41MzMzM2MwLDQxLjA5NjUzIDMzLjQzNjgsNzQuNTMzMzMgNzQuNTMzMzMsNzQuNTMzMzNjNDEuMDk2NTMsMCA3NC41MzMzMywtMzMuNDM2OCA3NC41MzMzMywtNzQuNTMzMzNjMCwtNDEuMDk2NTMgLTMzLjQzNjgsLTc0LjUzMzMzIC03NC41MzMzMywtNzQuNTMzMzN6TTY2Ljg4NTE2LDM0LjRoMzguMjE4NDljMTcuOTE2NjcsMCAzMi40OTYzNiwxNC41NzQyMiAzMi40OTYzNiwzMi40ODUxNnYzOC4yMTg0OWMwLDE3LjkxNjY3IC0xNC41NzQyMywzMi40OTYzNiAtMzIuNDg1MTYsMzIuNDk2MzZoLTM4LjIxODQ5Yy0xNy45MTY2NywwIC0zMi40OTYzNiwtMTQuNTc0MjMgLTMyLjQ5NjM2LC0zMi40ODUxNnYtMzguMjE4NDljMCwtMTcuOTE2NjcgMTQuNTc0MjIsLTMyLjQ5NjM2IDMyLjQ4NTE2LC0zMi40OTYzNnpNNjYuODg1MTYsNDUuODY2NjdjLTExLjU4NzA3LDAgLTIxLjAxODQ5LDkuNDM2ODkgLTIxLjAxODQ5LDIxLjAyOTY5djM4LjIxODQ5YzAsMTEuNTg3MDcgOS40MzY4OSwyMS4wMTg0OSAyMS4wMjk2OSwyMS4wMTg0OWgzOC4yMTg0OWMxMS41ODcwNywwIDIxLjAxODQ5LC05LjQzNjg5IDIxLjAxODQ5LC0yMS4wMjk2OXYtMzguMjE4NDljMCwtMTEuNTg3MDcgLTkuNDM2ODksLTIxLjAxODQ5IC0yMS4wMjk2OSwtMjEuMDE4NDl6TTExMi43NjMwMiw1NS40MTg0OWMyLjEwOTg3LDAgMy44MTg0OSwxLjcwODYyIDMuODE4NDksMy44MTg0OWMwLDIuMTA5ODcgLTEuNzA4NjIsMy44Mjk2OSAtMy44MTg0OSwzLjgyOTY5Yy0yLjEwOTg3LDAgLTMuODI5NjksLTEuNzE5ODIgLTMuODI5NjksLTMuODI5NjljMCwtMi4xMDk4NyAxLjcxOTgyLC0zLjgxODQ5IDMuODI5NjksLTMuODE4NDl6TTg2LDU3LjMzMzMzYzE1LjgwNjgsMCAyOC42NjY2NywxMi44NTk4NyAyOC42NjY2NywyOC42NjY2N2MwLDE1LjgwNjggLTEyLjg1OTg3LDI4LjY2NjY3IC0yOC42NjY2NywyOC42NjY2N2MtMTUuODA2OCwwIC0yOC42NjY2NywtMTIuODU5ODcgLTI4LjY2NjY3LC0yOC42NjY2N2MwLC0xNS44MDY4IDEyLjg1OTg3LC0yOC42NjY2NyAyOC42NjY2NywtMjguNjY2Njd6TTg2LDY4LjhjLTkuNDk5MywwIC0xNy4yLDcuNzAwNyAtMTcuMiwxNy4yYzAsOS40OTkzIDcuNzAwNywxNy4yIDE3LjIsMTcuMmM5LjQ5OTMsMCAxNy4yLC03LjcwMDcgMTcuMiwtMTcuMmMwLC05LjQ5OTMgLTcuNzAwNywtMTcuMiAtMTcuMiwtMTcuMnoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="
              />
            </a>

            {/* Twitter */}
            <a
              href="https://twitter.com/Nido69235106"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="h-10 w-10"
                alt="svgImg"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIKdmlld0JveD0iMCAwIDE3MiAxNzIiCnN0eWxlPSIgZmlsbDojMDAwMDAwOyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9Im5vbmUiIGZvbnQtd2VpZ2h0PSJub25lIiBmb250LXNpemU9Im5vbmUiIHRleHQtYW5jaG9yPSJub25lIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTAsMTcydi0xNzJoMTcydjE3MnoiIGZpbGw9Im5vbmUiPjwvcGF0aD48ZyBmaWxsPSIjZTU3Yjc3Ij48cGF0aCBkPSJNODYsMTcuMmMtMzcuOTk0OCwwIC02OC44LDMwLjgwNTIgLTY4LjgsNjguOGMwLDM3Ljk5NDggMzAuODA1Miw2OC44IDY4LjgsNjguOGMzNy45OTQ4LDAgNjguOCwtMzAuODA1MiA2OC44LC02OC44YzAsLTM3Ljk5NDggLTMwLjgwNTIsLTY4LjggLTY4LjgsLTY4Ljh6TTEyMy4wNjAyNyw3MS44NjczM2MwLjAzNDQsMC43NjI1MyAwLjA1MTYsMS41MTkzMyAwLjA1MTYsMi4yNzYxM2MwLDIzLjMyMzIgLTE3Ljc0NDY3LDUwLjIwMTA3IC01MC4yMDEwNyw1MC4yMDEwN2MtOS45NzAyNywwIC0xOS4yNDEwNywtMi45MTgyNyAtMjcuMDQ0MTMsLTcuOTI5MmMxLjM4MTczLDAuMTY2MjcgMi43ODY0LDAuMjQwOCA0LjIxNCwwLjI0MDhjOC4yNzMyLDAgMTUuODc1NiwtMi44MTUwNyAyMS45MDcwNywtNy41NTY1M2MtNy43MjI4LC0wLjE0MzMzIC0xNC4yNDE2LC01LjI0NiAtMTYuNDgzMzMsLTEyLjI1MjEzYzEuMDc3ODcsMC4yMDY0IDIuMTg0NCwwLjMxNTMzIDMuMzE5NiwwLjMxNTMzYzEuNjExMDcsMCAzLjE3NjI3LC0wLjIxNzg3IDQuNjQ5NzMsLTAuNjE5MmMtOC4wNzI1MywtMS42MTY4IC0xNC4xNTU2LC04Ljc0OTA3IC0xNC4xNTU2LC0xNy4yOTc0N2MwLC0wLjA3NDUzIDAsLTAuMTQ5MDcgMCwtMC4yMjM2YzIuMzc5MzMsMS4zMjQ0IDUuMDk2OTMsMi4xMTU2IDcuOTkyMjcsMi4yMDczM2MtNC43MywtMy4xNTkwNyAtNy44NDg5MywtOC41NjU2IC03Ljg0ODkzLC0xNC42ODMwN2MwLC0zLjIzOTMzIDAuODY1NzMsLTYuMjcyMjcgMi4zODUwNywtOC44Njk0N2M4LjcwMzIsMTAuNjc1NDcgMjEuNzA2NCwxNy43MDQ1MyAzNi4zNjY1MywxOC40Mzg0Yy0wLjI5ODEzLC0xLjI5IC0wLjQ1MjkzLC0yLjYzNzMzIC0wLjQ1MjkzLC00LjAxOTA3YzAsLTkuNzQwOTMgNy45MDA1MywtMTcuNjQ3MiAxNy42NDE0NywtMTcuNjQ3MmM1LjA3NCwwIDkuNjYwNjcsMi4xNDQyNyAxMi44NzcwNyw1LjU3MjhjNC4wMTkwNywtMC43OTY5MyA3Ljc5NzMzLC0yLjI1ODkzIDExLjIwODY3LC00LjI4MjhjLTEuMzE4NjcsNC4xMjIyNyAtNC4xMTY1Myw3LjU3MzczIC03Ljc2MjkzLDkuNzYzODdjMy41NjYxMywtMC40MjQyNyA2Ljk2NiwtMS4zNzAyNyAxMC4xMzY1MywtMi43NzQ5M2MtMi4zNTY0LDMuNTQzMiAtNS4zNDM0Nyw2LjY0NDkzIC04LjgwMDY3LDkuMTM4OTN6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4="
              />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/javiermojito/nido"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="h-10 w-10"
                alt="svgImg"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIKdmlld0JveD0iMCAwIDE3MiAxNzIiCnN0eWxlPSIgZmlsbDojMDAwMDAwOyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9Im5vbmUiIGZvbnQtd2VpZ2h0PSJub25lIiBmb250LXNpemU9Im5vbmUiIHRleHQtYW5jaG9yPSJub25lIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTAsMTcydi0xNzJoMTcydjE3MnoiIGZpbGw9Im5vbmUiPjwvcGF0aD48ZyBmaWxsPSIjZTU3YjdiIj48cGF0aCBkPSJNODYsMTcuMmMtMzcuOTk0OCwwIC02OC44LDMwLjgwNTIgLTY4LjgsNjguOGMwLDMyLjIzODUzIDIyLjE5OTQ3LDU5LjIxMzg3IDUyLjEyNzQ3LDY2LjY3ODY3Yy0wLjMyMTA3LC0wLjkyODggLTAuNTI3NDcsLTIuMDA2NjcgLTAuNTI3NDcsLTMuMzQyNTN2LTExLjc1OTA3Yy0yLjc5MjEzLDAgLTcuNDcwNTMsMCAtOC42NDU4NywwYy00LjcwNzA3LDAgLTguODkyNCwtMi4wMjM4NyAtMTAuOTIyLC01Ljc4NDkzYy0yLjI1MzIsLTQuMTc5NiAtMi42NDMwNywtMTAuNTcyMjcgLTguMjI3MzMsLTE0LjQ4MjRjLTEuNjU2OTMsLTEuMzAxNDcgLTAuMzk1NiwtMi43ODY0IDEuNTEzNiwtMi41ODU3M2MzLjUyNiwwLjk5NzYgNi40NSwzLjQxNzA3IDkuMjAyLDcuMDA2MTNjMi43NDA1MywzLjU5NDggNC4wMzA1Myw0LjQwODkzIDkuMTUwNCw0LjQwODkzYzIuNDgyNTMsMCA2LjE5NzczLC0wLjE0MzMzIDkuNjk1MDcsLTAuNjkzNzNjMS44ODA1MywtNC43NzU4NyA1LjEzMTMzLC05LjE3MzMzIDkuMTA0NTMsLTExLjI0ODhjLTIyLjkxMDQsLTIuMzU2NCAtMzMuODQzODcsLTEzLjc1NDI3IC0zMy44NDM4NywtMjkuMjI4NTNjMCwtNi42NjIxMyAyLjgzOCwtMTMuMTA2NCA3LjY1OTczLC0xOC41MzU4N2MtMS41ODI0LC01LjM4OTMzIC0zLjU3MTg3LC0xNi4zODAxMyAwLjYwNzczLC0yMC41NjU0N2MxMC4zMDg1MywwIDE2LjU0MDY3LDYuNjg1MDcgMTguMDM3MDcsOC40OTEwN2M1LjEzNzA3LC0xLjc2MDEzIDEwLjc3ODY3LC0yLjc1NzczIDE2LjcwNjkzLC0yLjc1NzczYzUuOTM5NzMsMCAxMS42MDQyNywwLjk5NzYgMTYuNzUyOCwyLjc2OTJjMS40NzkyLC0xLjc5NDUzIDcuNzE3MDcsLTguNTAyNTMgMTguMDQ4NTMsLTguNTAyNTNjNC4xOTY4LDQuMTkxMDcgMi4xODQ0LDE1LjIyNzczIDAuNTg0OCwyMC42MDU2YzQuNzkzMDcsNS40MTggNy42MTM4NywxMS44NDUwNyA3LjYxMzg3LDE4LjQ5NTczYzAsMTUuNDYyOCAtMTAuOTE2MjcsMjYuODU0OTMgLTMzLjc5MjI3LDI5LjIyMjhjNi4yOTUyLDMuMjg1MiAxMC44ODc2LDEyLjUxNTg3IDEwLjg4NzYsMTkuNDcwNHYxNS42NzQ5M2MwLDAuNTk2MjcgLTAuMTMxODcsMS4wMjYyNyAtMC4yMDA2NywxLjUzNjUzYzI2LjgwOTA3LC05LjM5NjkzIDQ2LjA2NzMzLC0zNC44NTI5MyA0Ni4wNjczMywtNjQuODcyNjdjMCwtMzcuOTk0OCAtMzAuODA1MiwtNjguOCAtNjguOCwtNjguOHoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="
              />
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="h-36 content-start flex flex-wrap content-start justify-center">
          <img
            className="h-64"
            src="https://blush.design/api/download?shareUri=RDN0HFZdQ&s=0%7Ef7d3bb&w=800&h=800&fm=png"
            alt="Person coding"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
