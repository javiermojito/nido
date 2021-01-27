import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white font-poppins pt-10 pb-10 pl-4 pr-4 flex flex-row">
      {/* Logo */}
      <div className="w-1/2 flex flex-wrap justify-center content-center pr-4">
        <img
          className="w-32 inline-block align-middle mx-auto"
          src="https://i.imgur.com/ZL6O7w3.png"
          alt="Isotipo Nido"
        />
      </div>
      {/* Nav */}
      <div className="w-1/2 h-auto pl-1">
        {/* routes */}
        <div className="pb-4">
          <h4 className="font-bold text-xl pb-2">Navegación</h4>
          <div className="flex flex-row">
            <div className="pr-2">
              <img src="https://i.imgur.com/a8WYDEC.png" alt="" />
            </div>
            <div className="flex flex-col justify-center content-center">
              <ul className="font-semibold flex flex-col justify-center content-center gap-y-2">
                {/* inicio */}
                <Link to="/">
                  <li>Inicio</li>
                </Link>

                {/* cursos */}
                <Link to="/cursos">
                  <li>Cursos</li>
                </Link>
                {/* contacto */}
                <Link to="/contacto">
                  <li>Contacto</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>

        {/* social media */}
        <div>
          <h4 className="font-bold text-xl">Redes sociales</h4>
          <div className="flex flex-row gap-x-1 justify-left content-center">
            {/* Instagram */}
            <a
              href="https://instagram.com/cursos.nido"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-10 h-10"
                alt="svgImg"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzAiIGhlaWdodD0iMzAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2ZmZmZmZiI+PHBhdGggZD0iTTg2LDExLjQ2NjY3Yy00MS4wOTY1MywwIC03NC41MzMzMywzMy40MzY4IC03NC41MzMzMyw3NC41MzMzM2MwLDQxLjA5NjUzIDMzLjQzNjgsNzQuNTMzMzMgNzQuNTMzMzMsNzQuNTMzMzNjNDEuMDk2NTMsMCA3NC41MzMzMywtMzMuNDM2OCA3NC41MzMzMywtNzQuNTMzMzNjMCwtNDEuMDk2NTMgLTMzLjQzNjgsLTc0LjUzMzMzIC03NC41MzMzMywtNzQuNTMzMzN6TTY2Ljg4NTE2LDM0LjRoMzguMjE4NDljMTcuOTE2NjcsMCAzMi40OTYzNiwxNC41NzQyMiAzMi40OTYzNiwzMi40ODUxNnYzOC4yMTg0OWMwLDE3LjkxNjY3IC0xNC41NzQyMywzMi40OTYzNiAtMzIuNDg1MTYsMzIuNDk2MzZoLTM4LjIxODQ5Yy0xNy45MTY2NywwIC0zMi40OTYzNiwtMTQuNTc0MjMgLTMyLjQ5NjM2LC0zMi40ODUxNnYtMzguMjE4NDljMCwtMTcuOTE2NjcgMTQuNTc0MjIsLTMyLjQ5NjM2IDMyLjQ4NTE2LC0zMi40OTYzNnpNNjYuODg1MTYsNDUuODY2NjdjLTExLjU4NzA3LDAgLTIxLjAxODQ5LDkuNDM2ODkgLTIxLjAxODQ5LDIxLjAyOTY5djM4LjIxODQ5YzAsMTEuNTg3MDcgOS40MzY4OSwyMS4wMTg0OSAyMS4wMjk2OSwyMS4wMTg0OWgzOC4yMTg0OWMxMS41ODcwNywwIDIxLjAxODQ5LC05LjQzNjg5IDIxLjAxODQ5LC0yMS4wMjk2OXYtMzguMjE4NDljMCwtMTEuNTg3MDcgLTkuNDM2ODksLTIxLjAxODQ5IC0yMS4wMjk2OSwtMjEuMDE4NDl6TTExMi43NjMwMiw1NS40MTg0OWMyLjEwOTg3LDAgMy44MTg0OSwxLjcwODYyIDMuODE4NDksMy44MTg0OWMwLDIuMTA5ODcgLTEuNzA4NjIsMy44Mjk2OSAtMy44MTg0OSwzLjgyOTY5Yy0yLjEwOTg3LDAgLTMuODI5NjksLTEuNzE5ODIgLTMuODI5NjksLTMuODI5NjljMCwtMi4xMDk4NyAxLjcxOTgyLC0zLjgxODQ5IDMuODI5NjksLTMuODE4NDl6TTg2LDU3LjMzMzMzYzE1LjgwNjgsMCAyOC42NjY2NywxMi44NTk4NyAyOC42NjY2NywyOC42NjY2N2MwLDE1LjgwNjggLTEyLjg1OTg3LDI4LjY2NjY3IC0yOC42NjY2NywyOC42NjY2N2MtMTUuODA2OCwwIC0yOC42NjY2NywtMTIuODU5ODcgLTI4LjY2NjY3LC0yOC42NjY2N2MwLC0xNS44MDY4IDEyLjg1OTg3LC0yOC42NjY2NyAyOC42NjY2NywtMjguNjY2Njd6TTg2LDY4LjhjLTkuNDk5MywwIC0xNy4yLDcuNzAwNyAtMTcuMiwxNy4yYzAsOS40OTkzIDcuNzAwNywxNy4yIDE3LjIsMTcuMmM5LjQ5OTMsMCAxNy4yLC03LjcwMDcgMTcuMiwtMTcuMmMwLC05LjQ5OTMgLTcuNzAwNywtMTcuMiAtMTcuMiwtMTcuMnoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="
              />
            </a>

            {/* Twitter */}
            <a
              href="https://twitter.com/Nido69235106"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-10 h-10"
                alt="svgImg"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzAiIGhlaWdodD0iMzAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2ZmZmZmZiI+PHBhdGggZD0iTTg2LDE3LjJjLTM3Ljk5NDgsMCAtNjguOCwzMC44MDUyIC02OC44LDY4LjhjMCwzNy45OTQ4IDMwLjgwNTIsNjguOCA2OC44LDY4LjhjMzcuOTk0OCwwIDY4LjgsLTMwLjgwNTIgNjguOCwtNjguOGMwLC0zNy45OTQ4IC0zMC44MDUyLC02OC44IC02OC44LC02OC44ek0xMjMuMDYwMjcsNzEuODY3MzNjMC4wMzQ0LDAuNzYyNTMgMC4wNTE2LDEuNTE5MzMgMC4wNTE2LDIuMjc2MTNjMCwyMy4zMjMyIC0xNy43NDQ2Nyw1MC4yMDEwNyAtNTAuMjAxMDcsNTAuMjAxMDdjLTkuOTcwMjcsMCAtMTkuMjQxMDcsLTIuOTE4MjcgLTI3LjA0NDEzLC03LjkyOTJjMS4zODE3MywwLjE2NjI3IDIuNzg2NCwwLjI0MDggNC4yMTQsMC4yNDA4YzguMjczMiwwIDE1Ljg3NTYsLTIuODE1MDcgMjEuOTA3MDcsLTcuNTU2NTNjLTcuNzIyOCwtMC4xNDMzMyAtMTQuMjQxNiwtNS4yNDYgLTE2LjQ4MzMzLC0xMi4yNTIxM2MxLjA3Nzg3LDAuMjA2NCAyLjE4NDQsMC4zMTUzMyAzLjMxOTYsMC4zMTUzM2MxLjYxMTA3LDAgMy4xNzYyNywtMC4yMTc4NyA0LjY0OTczLC0wLjYxOTJjLTguMDcyNTMsLTEuNjE2OCAtMTQuMTU1NiwtOC43NDkwNyAtMTQuMTU1NiwtMTcuMjk3NDdjMCwtMC4wNzQ1MyAwLC0wLjE0OTA3IDAsLTAuMjIzNmMyLjM3OTMzLDEuMzI0NCA1LjA5NjkzLDIuMTE1NiA3Ljk5MjI3LDIuMjA3MzNjLTQuNzMsLTMuMTU5MDcgLTcuODQ4OTMsLTguNTY1NiAtNy44NDg5MywtMTQuNjgzMDdjMCwtMy4yMzkzMyAwLjg2NTczLC02LjI3MjI3IDIuMzg1MDcsLTguODY5NDdjOC43MDMyLDEwLjY3NTQ3IDIxLjcwNjQsMTcuNzA0NTMgMzYuMzY2NTMsMTguNDM4NGMtMC4yOTgxMywtMS4yOSAtMC40NTI5MywtMi42MzczMyAtMC40NTI5MywtNC4wMTkwN2MwLC05Ljc0MDkzIDcuOTAwNTMsLTE3LjY0NzIgMTcuNjQxNDcsLTE3LjY0NzJjNS4wNzQsMCA5LjY2MDY3LDIuMTQ0MjcgMTIuODc3MDcsNS41NzI4YzQuMDE5MDcsLTAuNzk2OTMgNy43OTczMywtMi4yNTg5MyAxMS4yMDg2NywtNC4yODI4Yy0xLjMxODY3LDQuMTIyMjcgLTQuMTE2NTMsNy41NzM3MyAtNy43NjI5Myw5Ljc2Mzg3YzMuNTY2MTMsLTAuNDI0MjcgNi45NjYsLTEuMzcwMjcgMTAuMTM2NTMsLTIuNzc0OTNjLTIuMzU2NCwzLjU0MzIgLTUuMzQzNDcsNi42NDQ5MyAtOC44MDA2Nyw5LjEzODkzeiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+"
              />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/javiermojito/nido"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-10 h-10"
                alt="svgImg"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzAiIGhlaWdodD0iMzAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2ZmZmZmZiI+PHBhdGggZD0iTTg2LDE3LjJjLTM3Ljk5NDgsMCAtNjguOCwzMC44MDUyIC02OC44LDY4LjhjMCwzMi4yMzg1MyAyMi4xOTk0Nyw1OS4yMTM4NyA1Mi4xMjc0Nyw2Ni42Nzg2N2MtMC4zMjEwNywtMC45Mjg4IC0wLjUyNzQ3LC0yLjAwNjY3IC0wLjUyNzQ3LC0zLjM0MjUzdi0xMS43NTkwN2MtMi43OTIxMywwIC03LjQ3MDUzLDAgLTguNjQ1ODcsMGMtNC43MDcwNywwIC04Ljg5MjQsLTIuMDIzODcgLTEwLjkyMiwtNS43ODQ5M2MtMi4yNTMyLC00LjE3OTYgLTIuNjQzMDcsLTEwLjU3MjI3IC04LjIyNzMzLC0xNC40ODI0Yy0xLjY1NjkzLC0xLjMwMTQ3IC0wLjM5NTYsLTIuNzg2NCAxLjUxMzYsLTIuNTg1NzNjMy41MjYsMC45OTc2IDYuNDUsMy40MTcwNyA5LjIwMiw3LjAwNjEzYzIuNzQwNTMsMy41OTQ4IDQuMDMwNTMsNC40MDg5MyA5LjE1MDQsNC40MDg5M2MyLjQ4MjUzLDAgNi4xOTc3MywtMC4xNDMzMyA5LjY5NTA3LC0wLjY5MzczYzEuODgwNTMsLTQuNzc1ODcgNS4xMzEzMywtOS4xNzMzMyA5LjEwNDUzLC0xMS4yNDg4Yy0yMi45MTA0LC0yLjM1NjQgLTMzLjg0Mzg3LC0xMy43NTQyNyAtMzMuODQzODcsLTI5LjIyODUzYzAsLTYuNjYyMTMgMi44MzgsLTEzLjEwNjQgNy42NTk3MywtMTguNTM1ODdjLTEuNTgyNCwtNS4zODkzMyAtMy41NzE4NywtMTYuMzgwMTMgMC42MDc3MywtMjAuNTY1NDdjMTAuMzA4NTMsMCAxNi41NDA2Nyw2LjY4NTA3IDE4LjAzNzA3LDguNDkxMDdjNS4xMzcwNywtMS43NjAxMyAxMC43Nzg2NywtMi43NTc3MyAxNi43MDY5MywtMi43NTc3M2M1LjkzOTczLDAgMTEuNjA0MjcsMC45OTc2IDE2Ljc1MjgsMi43NjkyYzEuNDc5MiwtMS43OTQ1MyA3LjcxNzA3LC04LjUwMjUzIDE4LjA0ODUzLC04LjUwMjUzYzQuMTk2OCw0LjE5MTA3IDIuMTg0NCwxNS4yMjc3MyAwLjU4NDgsMjAuNjA1NmM0Ljc5MzA3LDUuNDE4IDcuNjEzODcsMTEuODQ1MDcgNy42MTM4NywxOC40OTU3M2MwLDE1LjQ2MjggLTEwLjkxNjI3LDI2Ljg1NDkzIC0zMy43OTIyNywyOS4yMjI4YzYuMjk1MiwzLjI4NTIgMTAuODg3NiwxMi41MTU4NyAxMC44ODc2LDE5LjQ3MDR2MTUuNjc0OTNjMCwwLjU5NjI3IC0wLjEzMTg3LDEuMDI2MjcgLTAuMjAwNjcsMS41MzY1M2MyNi44MDkwNywtOS4zOTY5MyA0Ni4wNjczMywtMzQuODUyOTMgNDYuMDY3MzMsLTY0Ljg3MjY3YzAsLTM3Ljk5NDggLTMwLjgwNTIsLTY4LjggLTY4LjgsLTY4Ljh6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4="
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
