import { SVGProps } from "react";

const SvgGemstone = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.334.83c.06-.194-.07-.394-.28-.427L8.682.186C8.388.14 8.17.437 8.317.682l.945 1.568c.154.256.555.212.644-.07l.428-1.35ZM5.42.185c.293-.046.512.251.364.496L4.84 2.25c-.154.256-.556.212-.645-.07L3.768.83c-.061-.194.07-.394.28-.427L5.42.186ZM1.966 1.54c.179-.197.512-.125.59.123l.586 1.852c.068.214-.101.43-.338.43H.53c-.25 0-.417-.24-.27-.431.028-.036.056-.071.086-.106.221-.251.44-.506.657-.762.317-.372.635-.745.963-1.106ZM.426 5.285c-.238 0-.406.22-.287.414.038.063.08.124.126.183l5.077 6.569c.085.11.179.208.28.296.219.19.494-.03.406-.299l-2.25-6.927a.351.351 0 0 0-.337-.236H.426Zm8.052 7.462c-.22.191-.494-.029-.407-.299l2.25-6.927a.351.351 0 0 1 .338-.236h3.015c.237 0 .406.22.287.414-.038.063-.08.124-.126.183l-5.078 6.569c-.085.11-.179.208-.28.296Zm5.094-8.801c.25 0 .417-.24.27-.432a2.084 2.084 0 0 0-.086-.106 68.35 68.35 0 0 1-.657-.762c-.317-.372-.635-.744-.963-1.106-.179-.197-.512-.125-.59.123l-.586 1.852c-.068.215.101.43.338.43h2.274Zm-6.52-2.669 1.306 2.167c.135.224-.035.501-.306.501H6.054c-.271 0-.44-.277-.306-.5l1.305-2.168Zm-.338 8.726c.102.316.572.316.674 0l1.39-4.285c.07-.215-.1-.433-.337-.433H5.66c-.237 0-.407.218-.337.433l1.39 4.285Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgGemstone;