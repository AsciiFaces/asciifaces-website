export const htmlSafe = (str: string) =>
  String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

export function renderSvg(text: string) {
  const content = htmlSafe(text);

  return `
          <svg xmlns="http://www.w3.org/2000/svg" width="350" height="350" version="1.1">
              <style>
                  text {
                      font-family: monospace;
                      font-size: 52px;
                      font-weight: 800;
                  }
              </style>
              <rect width="350" height="350" fill="black"/>
              <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white">${content}</text>
          </svg>
          `;
}
