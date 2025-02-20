import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Oval.scss";

function Oval() {
  const pathRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    if (path) {
      const length = path.getTotalLength(); // Longueur totale du chemin
      gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
      gsap.to(path, { strokeDashoffset: 0, duration: 2, ease: "power2.out" });
    }
  }, []);

  return (
    <svg
      className="oval"
      xmlns="http://www.w3.org/2000/svg"
      width="579"
      height="216"
      fill="none"
      viewBox="0 0 579 216"
    >
      <g clipPath="url(#clip0_6_101)">
        <path
          ref={pathRef}
          stroke="#FFD657" // Couleur du tracé
          strokeWidth="2" // Épaisseur du tracé
          fill="none" // Supprime le remplissage pour ne montrer que le contour
          d="M243.626 2.32c-.845 1.052-1.517 1.147-2.292.322-1.516-1.611-8.448 2.316-9.605 5.442-.662 1.78-.724 1.322-.251-1.819l.632-4.2-3.938.724c-5.758 1.061-7.424 1.145-8.397.423-1.256-.932-6.988-.354-8.225.829-.69.66-1.178.517-1.418-.417-.295-1.142-.955-1.177-3.338-.182-2.025.845-3.49.881-4.6.114-1.242-.859-2.07-.612-3.491 1.042-1.549 1.803-2.499 2.017-5.642 1.274-2.08-.492-4.186-.742-4.682-.556-.496.184-3.119.423-5.831.528-7.834.307-8.066.342-8.083 1.221-.009.46-1.28.57-2.828.248-2.513-.526-2.763-.338-2.356 1.76.306 1.576.041 2.336-.804 2.311-.691-.02-1.244-.774-1.226-1.675q.03-1.638-2.654-1.716c-1.551-.046-2.696.498-2.712 1.287-.016.843-1.413 1.38-3.654 1.406-4.129.046-5.454.986-3.559 2.526.879.714.936 1.049.178 1.039-.616-.01-1.133.721-1.151 1.622-.017.902-.636 1.621-1.374 1.6-.738-.022-1.328-.777-1.31-1.678.017-.901.433-1.627.926-1.612.492.014.904-.466.916-1.067.031-1.647-2.4-1.381-2.974.325-.306.907-1.334 1.27-2.63.929-1.965-.518-2.104-.268-1.833 3.287.279 3.657 2.445 6.276 3.611 4.365.296-.482 1.647-.931 3.002-.997s2.97-.16 3.586-.211c.617-.051 2.021.273 3.12.72 1.493.605 2.008.37 2.033-.929.027-1.415.457-1.528 2.309-.606 3.423 1.703 6.629 1.52 6.665-.38.019-1.02.876-1.614 2.27-1.573 1.307.038 2.225.693 2.208 1.574-.04 2.07 7.038 2.406 7.723.368.273-.812 1.574-1.419 2.887-1.35 4.553.24 5.529-.066 5.561-1.746.018-.927.535-1.592 1.148-1.476.614.115 2.037.179 3.163.14 1.753-.06 1.917-.384 1.142-2.257-.739-1.786-.657-2.063.446-1.511.743.374 1.337 1.364 1.321 2.2s.532 1.539 1.217 1.559c.687.02 1.462.772 1.726 1.672.703 2.403 11.509 2.084 14.017-.414 1.929-1.92 4.094-2.482 3.215-.832-.281.524.498 1.218 1.729 1.544 1.23.324 2.466.162 2.744-.36.279-.523.877-.657 1.328-.297.452.359.831.131.843-.504.013-.636.853-1.133 1.865-1.104 1.014.03 1.585.538 1.269 1.13-.352.662.912 1.056 3.286 1.025q3.862-.052 1.456-.57c-1.713-.371-2.243-.994-1.848-2.169.304-.906.792-1.23 1.084-.721.82 1.435 4.337 3.77 5.741 3.811.692.02 3.156-2.047 5.472-4.595 2.885-3.172 4.203-4.069 4.18-2.847-.019.981-1.267 2.626-2.773 3.654-3.083 2.104-2.861 3.905.492 4.002 1.431.042 2.021-.385 1.638-1.183-.43-.894-.153-.927.972-.115 1.989 1.435 4.909.643 4.947-1.342.016-.83.431-1.5.924-1.485.492.014.882.681.867 1.482-.044 2.285 10.502 2.33 11.052.048.341-1.416.425-1.382.481.197.077 2.206 1.888 2.57 3.493.703.833-.97 1.093-.969 1.074.008-.027 1.429 15.692 1.824 17.602.443.581-.421 1.251-.142 1.487.62.328 1.058.65 1.017 1.364-.174.513-.859.745-1.952.515-2.432s.201-.56.959-.181c.757.38 1.365 1.27 1.352 1.98-.028 1.407 1.676 1.778 8.471 1.845 2.462.023 7.696.248 11.633.5 12.536.8 13.31.772 13.688-.507.255-.87.77-.744 1.673.412 1.644 2.105 7.186 2.31 11.173.41 2.632-1.253 3.29-1.234 4.755.139 2.077 1.95 3.919 2.177 2.456.304-1.427-1.826-1.291-3.098.327-3.05.739.02 1.329.776 1.312 1.677-.018.901.673 1.7 1.533 1.773.859.074 2.77.286 4.244.47 1.474.186 2.986-.18 3.361-.81q.68-1.151.667.218c-.007.752.893 1.385 2.001 1.409 1.4.028 1.665-.243.871-.892-.92-.75-.881-1.188.204-2.234 1.098-1.06 1.52-.886 2.277.942.555 1.342 1.47 2.007 2.28 1.654.744-.323 1.841-.075 2.439.552 1.768 1.856 4.715 2.112 6.331.552.982-.946 1.502-1.027 1.486-.23-.025 1.302 2.86 1.786 3.84.645 1.319-1.535 7.735-1.245 8.44.38.745 1.722 4.569 2.303 10.314 1.569 1.869-.24 4.585.017 6.034.57s2.643.61 2.651.126c.01-.484 1.025-.85 2.256-.814 1.23.035 2.225.683 2.21 1.439-.031 1.642 3.314 3.04 3.749 1.566.166-.565 1.813-1.397 3.66-1.849 3.014-.737 3.354-.596 3.316 1.37-.037 1.939.345 2.114 3.329 1.523 1.855-.367 3.051-.293 2.661.165-1.027 1.205 4.886 3.646 6.162 2.545.619-.535 1.289-.43 1.615.249.307.64 2.078 1.207 3.936 1.26 1.858.055 3.662.461 4.008.904.978 1.253 9.788 1.534 11.064.355.819-.758 1.13-.54 1.104.772-.027 1.46.817 1.837 4.218 1.878 2.339.028 5.601.408 7.248.845 1.936.513 3.238.335 3.684-.502.53-.993.977-.947 1.912.2 1.774 2.173 5.813 4.312 6.541 3.464 1.139-1.327 4.895-.732 5.357.849.358 1.222.734 1.282 1.772.28 1.316-1.27 3.557-.474 2.776.986-.361.677 2.163.902 5.508.49.618-.076 1.17-.998 1.229-2.048.086-1.526.206-1.578.597-.256.271.91 1.082 2.211 1.803 2.892.72.682 1.037 1.752.702 2.379-.376.705.047.95 1.11.644.944-.272 3.165.396 4.935 1.483 1.77 1.09 5.213 2.039 7.655 2.11 2.441.07 4.43.555 4.421 1.075-.01.521.586.965 1.324.986s1.352-.505 1.366-1.17c.013-.665.622-.909 1.353-.541.732.366 1.34.19 1.351-.39.034-1.739 2.473-1.127 3.024.757.753 2.578.694 2.664-1.809 2.59-2.187-.063-2.226.03-.78 1.881 1.085 1.387 1.635 1.564 1.915.613.268-.907 1.319-.43 3.284 1.493 1.828 1.787 3.467 2.575 4.455 2.145.926-.403 1.868-.05 2.31.866.409.851 1.463 1.57 2.342 1.595.878.027 1.634.664 1.681 1.415.047.752.127 1.782.179 2.288.264 2.57 8.078 4.835 8.127 2.354.014-.734.632-.223 1.374 1.136.74 1.359 1.118 2.899.839 3.422-.678 1.27 1.102 2.966 4.141 3.946 1.472.476 3.424 2.566 4.826 5.168 1.293 2.404 2.849 4.404 3.453 4.445.606.04 1.35 1.416 1.655 3.059.304 1.642 1.276 3.979 2.16 5.194 1.092 1.5 1.383 2.923.909 4.435-.385 1.224-.649 4.165-.588 6.535.063 2.37-.508 5.41-1.269 6.756s-1.397 3.201-1.415 4.124c-.016.922-.433 1.542-.923 1.378s-1.425.915-2.076 2.399c-.653 1.484-2.095 3.156-3.205 3.718s-2.034 1.862-2.055 2.892c-.019 1.03-.612 2.248-1.317 2.708-.706.461-1.446 2.308-1.646 4.106-.265 2.38-.855 3.285-2.17 3.327-2.368.078-6.65 2.7-9.481 5.805-1.246 1.367-2.368 2.374-2.496 2.236-.649-.703-9.051 3.616-10.871 5.588-.636.69-1.168 1.839-1.181 2.551-.014.744-.757 1.042-1.736.699-.94-.329-2.977.292-4.525 1.381s-3.396 1.962-4.105 1.942c-.711-.021-2.81 1.516-4.67 3.415-1.858 1.899-4.115 3.277-5.015 3.064-1.152-.273-1.649.285-1.68 1.887-.037 1.918-.416 2.149-2.414 1.474-1.962-.661-2.279-.486-1.84 1.019q.536 1.82-.877 1.777c-.885-.025-1.207-.645-.864-1.664.372-1.105-.017-1.64-1.215-1.675-.969-.028-1.77.359-1.779.859-.01.501-.523.98-1.141 1.064-9.867 1.351-14.869 3.519-15.298 6.631-.289 2.113-.448 2.173-1.593.595-1.297-1.784-1.341-1.781-9.162.885-1.818.621-4.82 1.32-6.671 1.554-1.849.235-3.835.884-4.413 1.44-.577.557-3.445 1.267-6.373 1.576-2.954.312-7.231 1.732-9.605 3.19-3.438 2.111-4.534 2.36-5.565 1.264-.939-.997-1.771-1.064-3.094-.247-.996.614-3.185 1.076-4.865 1.026-1.679-.048-4.316.636-5.861 1.522-1.729.99-6.317 1.713-11.938 1.879-5.022.149-9.835.705-10.696 1.237-.861.53-4.34.964-7.732.963-3.39 0-7.799.61-9.795 1.356-1.996.745-6.24 1.368-9.429 1.385-4.062.022-6.442.61-7.941 1.966-1.861 1.68-2.306 1.725-3.395.331-.913-1.168-1.852-1.347-3.452-.658-1.208.521-3.72.864-5.581.763s-3.788-.089-4.283.027-2.166.091-3.715-.056-3.091.252-3.428.883c-.337.632-1.546 1.122-2.689 1.09-1.14-.034-2.58.648-3.199 1.515-.926 1.3-1.325 1.32-2.269.111-1.419-1.818-11.682-1.673-13.613.191-1.035.998-1.473.956-2.026-.199-.528-1.1-3.218-1.498-10.656-1.574-10.875-.112-14.413.808-14.512 3.774-.06 1.795-.133 1.786-.997-.133-.755-1.676-1.09-1.789-1.753-.598-.643 1.157-.918.992-1.279-.771-.313-1.525-1.304-2.349-3.085-2.567-1.443-.177-2.633.113-2.643.646-.011.532-1.224.759-2.697.506s-2.686-.013-2.696.532c-.028 1.416-2.78 1.877-5.465.914-1.728-.619-2.567-.322-3.389 1.202-.601 1.114-1.773 2.005-2.605 1.981-1.178-.033-1.27-.328-.416-1.324 2.331-2.712 1.108-3.572-5.139-3.617-3.455-.025-6.484-.463-6.73-.975-.654-1.363-4.75 1.058-5.24 3.099-.337 1.409-.431 1.359-.484-.262-.058-1.796-.809-2.001-7.007-1.918-3.817.05-7.841.45-8.94.887-1.177.469-2.224.326-2.547-.346-.301-.629-1.168-.872-1.925-.543-.758.33-1.822.158-2.365-.382-2.849-2.838-6.707-1.979-7.988 1.777-.44 1.29-.56 1.226-.587-.308-.024-1.368-.751-1.94-2.496-1.957-1.353-.015-3.453-.191-4.666-.393-2.428-.402-3.836 3.029-1.881 4.584.595.472.795 1.399.444 2.056-.922 1.728-2.328 1.426-2.291-.491.017-.901-.386-1.65-.896-1.665-.612-.018-.57-.793.126-2.295 1.012-2.185.885-2.258-3.513-2.015-3.423.191-4.556-.121-4.534-1.246.024-1.208-.236-1.243-1.339-.178-.83.8-1.36.872-1.347.183.013-.667-2.297-1.212-5.571-1.315-3.076-.097-10.087-.471-15.578-.831-5.491-.359-9.805-.278-9.584.182.533 1.11-2.282-.286-4.866-2.414-1.502-1.236-2.483-1.407-3.57-.621-.837.604-2.286.682-3.274.178-2.613-1.335-9.324-1.437-13.328-.204-2.64.813-3.661.751-4.141-.249-.363-.757-2.901-1.459-5.89-1.631-4.351-.251-5.604.108-7.312 2.096-2.565 2.985-4.293 3.139-2.733.243 1.315-2.439.376-4.335-1.225-2.471-1.578 1.838-2.939 1.501-1.589-.392.63-.884.996-1.636.813-1.673-.182-.034-2.873-.411-5.978-.836-5.064-.692-5.889-.514-7.996 1.735l-2.348 2.508.648-2.987c.707-3.253.765-3.214-5.416-3.713-2.09-.171-3.809.139-3.82.689s-.636.209-1.391-.759c-.756-.966-2.084-1.778-2.951-1.804-.868-.024-1.828-.367-2.136-.76-.306-.394-2.077-.885-3.933-1.091-8.573-.955-14.033-2.142-15.109-3.285-.868-.924-1.552-.879-2.64.17-1.242 1.2-1.638 1.115-2.585-.546-.84-1.473-1.242-1.612-1.615-.551-.39 1.104-.66 1.114-1.253.04-.416-.752-1.697-1.175-2.846-.939-1.15.235-4.323-.603-7.054-1.863-2.729-1.263-5.688-2.036-6.574-1.721-.987.35-1.605.016-1.596-.868.01-1.06-.228-1.014-.906.175-.787 1.38-1.137 1.259-2.432-.843-.833-1.348-3.808-3.593-6.614-4.989-2.805-1.394-5.094-2.86-5.086-3.256.007-.397-1.4-.562-3.127-.367-2.888.327-3.137.123-3.086-2.522.045-2.34-.457-3.018-2.685-3.63-1.934-.53-3.397-2.092-4.975-5.309-1.23-2.508-2.137-4.722-2.017-4.924s-.352-.953-1.052-1.67c-.7-.716-1.469-4.131-1.711-7.587-.386-5.527-.22-6.442 1.384-7.601 1.002-.724 1.844-2.428 1.87-3.786.026-1.357.431-2.457.9-2.442.47.013 1.556-1.677 2.413-3.756.858-2.079 2.119-3.764 2.801-3.744s1.252-.584 1.267-1.34.844-1.967 1.843-2.688 1.834-2.235 1.855-3.361c.023-1.169.86-2.285 1.953-2.599 1.538-.444 1.81-1.102 1.39-3.367-.509-2.747.665-3.872 1.73-1.656.292.61.867 1.118 1.278 1.131 1.112.032 1.998-3.231 1.278-4.707-.345-.707-.495-2.143-.333-3.19s-.157-1.918-.71-1.934c-.551-.016-.771.455-.487 1.047s-.498 1.355-1.738 1.697c-1.241.343-2.517 1.55-2.836 2.682-.319 1.134-.955 2.05-1.414 2.037-.46-.013-.847.574-.86 1.306-.015.732-1.12 2.424-2.454 3.759-1.336 1.334-2.892 3.518-3.456 4.852s-2.34 3.126-3.945 3.981c-1.606.856-2.94 2.397-2.972 3.432-.035 1.215-.525 1.64-1.386 1.209-1.543-.775-1.701.476-.561 4.416.673 2.322.5 3-.996 3.922-.995.614-1.572 1.611-1.28 2.217.29.604 0 1.841-.646 2.747-.874 1.225-.933 2.145-.229 3.596.58 1.193.625 2.538.118 3.467-1.129 2.066-1.185 7.518-.077 7.551.492.014.9 1.379.907 3.032s.228 2.399.49 1.654c.621-1.753 1.957-1.715 1.796.052-.21 2.3 3.058 9.653 4.306 9.689.647.019 1.164.726 1.148 1.57-.019.966.599 1.355 1.657 1.051 1.154-.332 2.284.593 3.586 2.94 1.045 1.884 2.678 3.447 3.629 3.475s1.715.788 1.697 1.688c-.017.902.573 1.657 1.311 1.679.739.021 1.332.572 1.32 1.222-.012.651.486.973 1.106.716.62-.258 1.043-1.006.938-1.665-.105-.657.404-.897 1.13-.533.725.365 1.307 1.291 1.292 2.06-.026 1.364 5.019 5.073 6.977 5.129.541.016.976.447.966.956s1.23 1.004 2.756 1.102c1.525.097 3.475.991 4.333 1.985 1.048 1.213 2.335 1.595 3.917 1.158 1.383-.38 2.348-.19 2.336.46-.012.609.789.875 1.78.589 2.032-.587 2.386-1.977.726-2.852-.61-.32-.2-.595.907-.61 1.166-.017 2.003.618 1.986 1.503-.035 1.825 4.9 4.571 7.753 4.316 1.11-.099 2.01.276 1.999.836-.033 1.689 2.78 2.547 4.119 1.256.97-.937 1.245-.829 1.22.477-.024 1.273 1.332 1.875 5.55 2.461 3.07.427 6.73.755 8.135.734 2.3-.039 2.51-.347 2.113-3.1-.31-2.151-.028-3.235.95-3.662 2.11-.918 2.381-.733 1.738 1.178-.454 1.349-.17 1.632 1.224 1.23 2.313-.666 2.307.538-.01 2.476-1.654 1.384-1.685 1.659-.402 3.475.984 1.391 1.842 1.695 2.915 1.034.862-.533 2.054-.512 2.754.043.678.539 1.525.772 1.881.517s1.78.105 3.162.799c1.383.696 4.523 1.542 6.979 1.883s5.215.926 6.132 1.3c1.084.443 1.461.251 1.077-.548-.884-1.84.924-1.43 2.17.493 1.529 2.361 2.646 2.111 2.698-.602.032-1.696.34-2.023 1.143-1.219.604.605 2.397 1.676 3.984 2.38 2.708 1.2 2.889 1.12 2.934-1.268.032-1.628.699-2.734 1.848-3.066 1.414-.408 1.626-.165.994 1.142-1.407 2.907 1.786 5.692 6.659 5.807 2.367.055 6.007.631 8.092 1.276 2.211.685 4.002.773 4.302.21.283-.529.086-.976-.434-.99-.521-.016-.94-.412-.932-.881.027-1.349 5.133-3.179 6.294-2.255.689.546.327 1.058-1.053 1.49l-2.104.655 1.996 2.15c2.536 2.73 15.16 3.487 16.012.961.679-2.017 2.118-1.9 2.078.167-.019 1.008.807 1.663 2.146 1.702 1.832.054 2.175-.449 2.165-3.161-.01-2.356-.498-3.328-1.81-3.606-1.567-.33-1.62-.548-.418-1.699 1.165-1.116 1.694-.526 3.432 3.851l2.053 5.171.569-3.188c.313-1.754.278-4.28-.077-5.613-.501-1.88-.355-2.281.645-1.778.711.356 1.289 1.21 1.283 1.898-.007.747.314.652.799-.234 1.141-2.086 2.965-.3 2.259 2.21-.321 1.143-.181 2.089.311 2.103.491.015 1.132 1.017 1.421 2.228.289 1.21 1.103 2.217 1.807 2.238.706.02 1.274.529 1.262 1.13-.028 1.456 3.215 1.485 5.545.049 1.434-.884 2.04-.804 2.607.349.574 1.165.75 1.075.79-.411.06-2.278 2.488-2.438 4.426-.292.762.842 2.89 1.857 4.729 2.254 2.608.563 3.351.361 3.376-.92.031-1.649 2.2-1.294 5.308.866.704.49 2.201.492 3.327.006 1.229-.529 2.253-.456 2.56.184.75 1.563 6.452 1.471 6.923-.114.292-.977.748-1.023 1.645-.164.684.656 3.555 1.383 6.379 1.615 4.544.374 5.394.1 7.364-2.375l2.228-2.798.245 2.534c.23 2.382.597 2.531 6.066 2.467 3.202-.037 6.227-.107 6.719-.155.494-.048 6.39.411 13.103 1.02 11.452 1.039 12.236.984 12.676-.92.414-1.791.477-1.804.536-.113.059 1.707 1.044 2.427 2.934 2.143 1.367-.206 27.283-.679 29.601-.54 1.352.08 2.468-.313 2.479-.875.012-.619.836-.616 2.089.008 1.139.567 2.612.643 3.275.169.669-.478 1.865-.331 2.687.328.921.74 2.811.894 4.998.408 1.932-.43 3.88-.663 4.323-.517.445.145 1.107-.295 1.472-.979.501-.94 1.13-.923 2.561.066 1.046.723 2.271 1.046 2.725.723.455-.325 3.354-.759 6.442-.961s5.886-.876 6.216-1.496c.331-.619 1.37-1.086 2.309-1.036 2.354.124 4.993.195 6.857.187a1.62 1.62 0 0 0 1.597-1.58c.017-.864.635-1.552 1.373-1.531s1.333.53 1.322 1.131c-.012.601.558 1.11 1.265 1.13.916.027 1.298-1.24 1.322-4.386.019-2.434.29-4.722.6-5.084.314-.362.544.628.512 2.202-.061 3.196 1.549 8.476 2.594 8.508 1.677.048 3.538-1.353 3.563-2.683.048-2.459 2.056-3.063 3.246-.975 1.335 2.342 4.36 1.536 3.629-.967-.281-.961.024-1.629.737-1.609.671.02 1.437.78 1.703 1.689s1.404 1.624 2.528 1.587c1.518-.051 1.643-.208.487-.613-1.807-.633-2.074-2.586-.346-2.536.645.019 1.939.754 2.877 1.633 1.203 1.128 2.041 1.274 2.848.495.804-.776 1.135-.725 1.118.173-.015.847.958 1.08 2.897.696 3.12-.618 4.179-.806 13.254-2.352 3.213-.548 6.654-1.424 7.65-1.95.994-.523 2.815-.872 4.044-.772 3.196.258 9.272-1.023 10.295-2.171.478-.537 1.633-.954 2.566-.927.934.027 2.784-.837 4.112-1.923 1.645-1.341 2.981-1.676 4.188-1.047 2.805 1.46 3.993 1.283 3.468-.513-.306-1.047.044-1.638.955-1.612.791.023 1.429.533 1.417 1.134s.583 1.11 1.321 1.132c1.587.046 1.604-.074.543-3.739-.533-1.837-.514-2.819.053-2.802.481.014.859.763.842 1.664s.739 1.661 1.684 1.688c.943.028 1.84.531 1.993 1.117.163.626 1.999.368 4.431-.622 3.143-1.281 4.419-2.494 5.244-4.98l1.089-3.286 1.318 2.413c1.253 2.298 1.495 2.343 5.003.945 2.028-.807 3.985-1.232 4.348-.942.364.288.503-.636.307-2.057-.345-2.536 1.705-5.349 2.269-3.11.158.627.793 2.028 1.411 3.112.992 1.741 1.539 1.828 4.654.741 1.944-.677 5.257-2.12 7.366-3.209s4.451-1.962 5.204-1.94 2.99-1.142 4.967-2.587c1.978-1.447 4.18-2.612 4.894-2.591.712.02 1.84-.562 2.505-1.294.665-.731 2.564-1.423 4.219-1.536s3.876-.909 4.936-1.769c1.057-.861 2.639-1.543 3.515-1.518.874.026 1.605-.69 1.622-1.592.018-.919.829-1.616 1.849-1.586 1.001.029 2.065-.677 2.365-1.57s1.521-1.596 2.71-1.561c1.486.043 2.448-.787 3.067-2.644.884-2.647 2.759-3.724 2.718-1.561-.031 1.617 1.7 1.377 3.27-.451.756-.879 2.056-1.58 2.888-1.556.833.026 1.932-1.009 2.443-2.298s1.742-2.851 2.736-3.473c.993-.621 2.717-2.209 3.831-3.531 1.113-1.319 2.346-2.411 2.739-2.425s1.751-1.54 3.019-3.392c1.267-1.852 3.439-4.623 4.826-6.156 3.366-3.723 8.846-16.393 6.303-14.575-1.837 1.314-1.102-3.832 1.311-9.177 1.452-3.216 2.33-6.141 1.949-6.501-.38-.361-.626-4.056-.548-8.211.097-5.066-.221-7.718-.964-8.045-.609-.268-1.096-1.13-1.08-1.917.014-.787-.535-1.713-1.22-2.056-.685-.345-1.487-2.136-1.783-3.982s-.902-3.648-1.35-4.004-.808-1.725-.801-3.041c.007-1.317-.853-3.67-1.914-5.227-2.64-3.88-8.519-9.321-8.547-7.912-.012.631-.626 1.13-1.364 1.11-.738-.022-1.334-.453-1.325-.956.01-.505-.979-1.508-2.196-2.227-1.218-.721-2.206-2.18-2.199-3.246.016-1.978-4.998-5.907-7.636-5.984-.787-.023-1.987-.919-2.667-1.99-.851-1.34-1.385-1.548-1.709-.664-.32.87-1.044.553-2.242-.98-1.228-1.573-2.432-2.08-3.942-1.666-1.218.336-2.163.117-2.151-.5.034-1.782-6.3-6.376-10.157-7.366-1.96-.503-3.968-1.343-4.463-1.865-1.818-1.922-11.106-5.414-17.62-6.625-2.04-.379-5.01-1.143-6.601-1.697-1.958-.682-2.898-.622-2.914.187-.012.657-.909.147-1.993-1.135-1.236-1.463-3.632-2.58-6.434-3-2.456-.37-6.468-1.282-8.916-2.028-2.449-.744-6.78-1.613-9.626-1.932-2.848-.318-5.655-1.065-6.238-1.66-.583-.596-3.879-1.21-7.323-1.366-6.172-.279-7.635-.545-10.263-1.865-2.387-1.198-10.709-1.901-10.728-.906-.011.534-.754.463-1.651-.158-1.122-.775-1.962-.744-2.689.103-.798.928-1.049.857-1.027-.29.022-1.107-.287-1.018-1.133.327-1.313 2.085-4.911 1.778-6.01-.511-.472-.981-1.64-1.264-3.536-.858-1.927.412-2.635.232-2.211-.562.39-.732-.153-.69-1.453.113-1.72 1.06-2.247.983-3.06-.442-.88-1.545-1.09-1.537-2.034.075-.976 1.667-1.055 1.658-1.069-.115-.008-1.052-.116-1.96-.237-2.019-.122-.057-4.221-.439-9.107-.846-4.886-.41-9.368-1.257-9.958-1.884-.736-.782-1.28-.755-1.728.083-.426.8-1.781.917-3.893.339-5.516-1.512-9.046-1.504-9.075.02-.016.772-.43 1.393-.922 1.379s-.784-.576-.648-1.249c.136-.672-.758-1.385-1.985-1.583-1.227-.199-3.13-.742-4.23-1.208-1.513-.64-2.007-.416-2.032.92-.019.973.436 1.78 1.01 1.797.573.017.736.39.358.828-.377.44-1.177-.061-1.775-1.113-1.48-2.598-5.647-2.899-9.339-.674-2.401 1.447-3.26 1.545-4.039.461-.748-1.037-.72-1.177.113-.571.678.493 1.118.146 1.137-.9.018-.936-.482-1.718-1.109-1.736-1.392-.04-5.216 2.826-6.791 5.09-1.001 1.44-1.145 1.334-1.103-.812.037-1.97-.317-2.338-1.756-1.826-1.286.457-1.794.144-1.77-1.088.024-1.266-.749-1.697-2.88-1.608-1.603.068-3.571.493-4.378.945s-1.704.517-1.994.145c-.292-.374-4.222-.926-8.734-1.23-6.204-.415-8.723-.156-10.332 1.067-1.787 1.355-2.201 1.369-2.577.082-.472-1.61-3.755-1.986-5.633-.644-.608.434-.92 1.173-.696 1.64.226.468-.16 1.795-.853 2.946-1.079 1.788-4.07 2.372-6.788 1.327-.751-.289 4.024-2.445 4.854-2.19.426.13.541-.567.253-1.552-.288-.983-.514-2.243-.504-2.798.011-.587-2.895-.827-6.929-.572-8.195.515-8.05.522-11.184-.489-1.872-.604-2.455-.39-2.48.912-.029 1.507-.31 1.515-2.464.063-3.328-2.244-10.029-2.3-12.727-.107-1.556 1.263-2.289 1.4-2.523.473-.483-1.92-5.132-1.732-6.554.263-1.114 1.561-1.349 1.52-2.595-.451-1.164-1.843-1.548-1.945-2.565-.678m11.461 3.386c-.018.901-.436 1.688-.93 1.749-.493.061-1.316.16-1.827.22-.512.06-1.327.836-1.811 1.724-1.248 2.288-1.148-.624.115-3.348 1.138-2.457 4.499-2.717 4.453-.345m-47.477.74c-.005.266-.418.774-.916 1.131-.5.357-.898.128-.886-.507.012-.636.425-1.146.917-1.131s.891.242.885.508m-26.478 5.229c-.913 1.712-2.304.255-1.64-1.718.366-1.086.858-1.281 1.417-.565.471.603.572 1.63.223 2.283m218.819 4.802c-.018.902-.624 1.622-1.346 1.6-.801-.022-1.101-.672-.768-1.661.301-.893.906-1.613 1.346-1.6.439.012.785.76.768 1.661m9.349-.547c-.454.438-1.137 1.278-1.515 1.868-.394.613-.679.253-.666-.839.013-1.063.685-1.893 1.515-1.868.82.023 1.12.4.666.839m-232.237-4.296c-.011.601-.422 1.08-.915 1.067-.492-.015-.886-.518-.874-1.119.012-.6.424-1.08.916-1.066.491.014.885.517.873 1.118m28.406.394c-.303.354-1.076.37-1.716.036-.708-.37-.491-.622.553-.644.944-.02 1.468.254 1.163.608m217.697 7.94c-.009.517-.616.64-1.348.274-.731-.368-1.322-1.092-1.313-1.61.011-.517.618-.64 1.349-.274.732.368 1.322 1.093 1.312 1.61m18.818-.628c-.012.6-.726 1.064-1.587 1.03-1.339-.053-1.368-.211-.203-1.082 1.714-1.284 1.815-1.281 1.79.052m-281.519-6.003c.292.61.104 1.097-.417 1.081-.52-.015-.938-.519-.926-1.12.011-.6.197-1.087.415-1.08s.635.51.928 1.12m234.042 6.808c-.012.6-.448 1.08-.969 1.065s-.689-.512-.373-1.104.751-1.072.968-1.065c.218.006.385.503.374 1.104m22.284 3.32c.789 1.221.816 1.724.089 1.703-.569-.017-1.251-.775-1.516-1.684-.266-.91-1.045-1.67-1.732-1.69-.685-.02-1.236-.545-1.224-1.167.027-1.415 2.783.37 4.383 2.838m-11.8-2.355c-.303.354-1.076.37-1.715.036-.708-.369-.492-.622.552-.644.944-.02 1.468.254 1.163.608m-262.355-4.283c-1.193 1.388-.643 3.624.9 3.653 1.239.023 1.312-.178.352-.962-.669-.544-.929-1.527-.577-2.185.702-1.316.289-1.627-.675-.506m295.344 11.8c-.303.355-1.076.372-1.715.037-.708-.37-.492-.622.552-.644.944-.02 1.468.254 1.163.608m2.899 1.61c-.012.602-.424 1.081-.917 1.067-.491-.014-.885-.518-.873-1.118.011-.601.423-1.081.916-1.067.492.015.886.518.874 1.119m9.835.833c-.018.901-.435 1.627-.927 1.613s-.88-.764-.864-1.665.435-1.627.926-1.612c.493.014.882.763.865 1.664m25.017 2.978c-.019.937-.43 1.388-.916 1.002-.485-.385-.873-1.163-.862-1.729s.423-1.016.915-1.002.881.793.863 1.73m32.926 10.73c-.017.902-.636 1.622-1.374 1.6-.738-.021-1.328-.776-1.311-1.677s.635-1.621 1.374-1.6c.739.022 1.329.777 1.311 1.678m30.838 10.462c-.262.744-.454.123-.425-1.379s.245-2.11.478-1.352c.235.759.211 1.988-.053 2.73m-421.937.57c-.316.593-.147 1.09.374 1.105.52.015.957-.465.968-1.065.012-.601-.156-1.098-.373-1.104-.218-.007-.653.473-.969 1.065m-12.025 4.023c-.029 1.502.162 2.123.424 1.379.264-.744.287-1.973.053-2.731s-.448-.15-.477 1.352m-18.796.78c-1.427 1.662-1.425 3.319.005 2.733.62-.254 1.794.278 2.607 1.184.814.907 1.913 1.337 2.444.958 1.294-.926 1.266-2.739-.043-2.777-.576-.017-1.696-.78-2.487-1.697-1.11-1.285-1.688-1.376-2.526-.4m-12.13 4.44c-.301.35-.345 1.33-.097 2.177.361 1.236-.34 1.385-3.54.754-2.541-.5-4.224-.348-4.633.417-.353.662-.215 1.216.306 1.231s.925 1.195.898 2.622c-.04 2.04.429 2.609 2.188 2.66 1.576.046 2.248-.53 2.276-1.945.042-2.212 2.574-4.184 4.319-3.362q1.112.525.546-1.404c-.385-1.315-.235-1.666.468-1.107.569.451 1.041.352 1.053-.22.01-.572-.612-1.357-1.384-1.744-1.721-.865-1.727-.865-2.4-.08m5.561 2.503c-.038 2.015 1.603 2.73 3.323 1.45 1.289-.96 1.314-1.092.13-.688-.808.276-1.909-.063-2.448-.753-.725-.927-.987-.93-1.005-.009m-19.31 3c-.316.593-.148 1.09.373 1.105.52.015.934.724.918 1.575-.043 2.243 2.015 2.809 3.232.889.786-1.24.76-2.002-.1-3.104-1.356-1.736-3.62-1.973-4.424-.464M54.76 73.32c-.868.25-1.593 1.341-1.614 2.425s-.73 2.626-1.577 3.427c-1.34 1.266-1.463 1.22-.945-.35.353-1.075.078-2.064-.681-2.445-.7-.352-1.284-.163-1.295.418-.011.582-.625 1.04-1.363 1.02-.738-.022-1.352.437-1.363 1.019-.011.58-.578.778-1.26.434-1.982-.994-2.27.947-.488 3.292 1.442 1.898 1.64 1.937 1.67.322.02-1.006.64-1.812 1.378-1.79.738.021 1.328.81 1.31 1.754-.056 2.868 3.835 1.532 4.605-1.582.422-1.707.691-2.004.724-.8.059 2.138 1.403 2.59 2.361.794.343-.643 1.372-.908 2.288-.587 1.359.476 1.514.225.852-1.376-.446-1.077-.56-2.25-.254-2.606.609-.71-1.3-4.112-2.208-3.933-.311.06-1.273.315-2.14.564m5.524 3.78c-1.165.87-1.136 1.029.203 1.082.861.034 1.575-.43 1.587-1.03.025-1.333-.076-1.336-1.79-.053M36.68 84.577c-4.677 3.494-5.178 4.41-2.835 5.186.856.283.253.277-1.343-.013-3.002-.546-4.027.977-1.509 2.24.909.456 1.246 1.508.925 2.877-.28 1.187-.143 2.169.304 2.182s.83-.96.853-2.162c.046-2.381.711-2.659 2.628-1.1 1.444 1.176 4.57-.685 4.61-2.743.015-.784.672-1.067 1.58-.68 1.254.532 1.31.437.291-.49-1.03-.938-1.048-1.452-.092-2.792.95-1.332.953-2.024.013-3.667-1.101-1.925-1.37-1.868-5.425 1.162m-18.625 22.99c.297.618-.381 1.074-1.534 1.032-1.663-.063-1.8-.276-.703-1.097 1.69-1.265 1.597-1.267 2.237.065m522.134 43.606c.293.609-.119 1.089-.916 1.066-.796-.023-1.19-.527-.874-1.119s.728-1.071.916-1.066c.188.006.582.509.874 1.119m-15.575 11.071c-.31.918-.75 1.43-.979 1.137-.23-.293-.142-1.051.196-1.681.915-1.718 1.425-1.364.783.544m-2.812 6.475c-.309.919-.75 1.431-.979 1.138s-.14-1.05.197-1.681c.916-1.717 1.424-1.363.782.543m-20.966 3.17c-.012.6-.448 1.079-.969 1.065-.521-.016-.69-.513-.373-1.105.315-.592.751-1.071.968-1.065.218.007.385.503.374 1.105m3.132.09c.293.61-.096 1.09-.863 1.068s-1.386-.531-1.374-1.133c.012-.601.4-1.081.863-1.068.464.014 1.082.524 1.374 1.133m-59.938 20.118c-.011.6-.424 1.08-.916 1.066s-.885-.518-.873-1.118c.011-.602.422-1.081.915-1.066.492.013.886.517.874 1.118m-346.258-.126c.403.387.09.982-.697 1.324-1.03.449-1.418-.03-1.385-1.71.024-1.281.338-1.878.697-1.324s.982 1.324 1.385 1.71m15.537 2.097c-.304.354-1.077.37-1.716.036-.708-.37-.491-.622.553-.644.944-.019 1.467.254 1.163.608m219.436 10.641c-.018.941-.839 1.615-1.93 1.582-1.588-.045-1.712-.318-.755-1.66.631-.883 1.499-1.596 1.931-1.584.433.012.771.761.754 1.662m-98.013-2.304c.292.609-.119 1.089-.917 1.066-.795-.023-1.189-.527-.873-1.118s.728-1.072.916-1.068c.187.006.581.51.874 1.12m-35.36-.615c-.005.225-.624 1.006-1.378 1.731-1.121 1.083-1.361 1-1.334-.451.02-.975.638-1.754 1.377-1.733.739.022 1.339.225 1.335.453m59.069 1.785c-.006.266-.418.774-.918 1.132s-.898.128-.886-.508.425-1.145.917-1.131.892.243.887.507m-39.808 1.641c.698.02 1.25 1.019 1.227 2.221-.024 1.201-.272 2.178-.554 2.17-1.028-.03-2.573-2.864-2.725-4.998-.084-1.204.057-1.569.314-.811.259.759 1.041 1.397 1.738 1.418m-37.259 1.102c-.026 1.408.411 2.195 1.083 1.943.62-.232 1.14-1.078 1.154-1.878.016-.802-.47-1.676-1.081-1.945-.661-.29-1.128.472-1.156 1.88m56.993 1.863c-.302.863-.509.597-.529-.677-.015-1.152.209-1.791.499-1.42.289.372.303 1.316.03 2.097m2.461 3.145c.294.609-.095 1.091-.862 1.068s-1.386-.532-1.375-1.133c.012-.601.4-1.081.863-1.068.464.013 1.082.523 1.374 1.133"
          clipRule="evenodd"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_6_101">
          <path fill="#fff" d="M.438.598h577.973V216H.438z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Oval;
