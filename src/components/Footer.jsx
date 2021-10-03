import React from 'react';
import '../styles/footer.scss';

import logo from '../images/icons/logoColor.png';


export default function Footer() {

  const sendWaMessage = (number, textMessage) => {
    const message = `https://wa.me/57${number}?text=${encodeURIComponent(textMessage)}`

    window.open(message, '_blank').focus()
  }

  return (
    <footer className='footer'>

      <div className="top">

        <div className="footer__logo">
          <img className='footer__mainLogo' alt="" src={logo} />

          <div className="footer__socialMedia">

            <a href='https://www.facebook.com/cvamazorinoquia'>
              <svg className='iconFooter' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.397 20.9969V12.8009H16.162L16.573 9.59193H13.397V7.54792C13.397 6.62192 13.655 5.98793 14.984 5.98793H16.668V3.12693C15.8487 3.03912 15.0251 2.99672 14.201 2.99993C11.757 2.99993 10.079 4.49193 10.079 7.23093V9.58593H7.33203V12.7949H10.085V20.9969H13.397Z" fill="#343434" />
              </svg>
            </a>

            {/* //TODO falta el link de twitter */}
            <a href="">
              <svg className='iconFooter' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.633 7.99704C19.646 8.17204 19.646 8.34604 19.646 8.52004C19.646 13.845 15.593 19.981 8.186 19.981C5.904 19.981 3.784 19.32 2 18.172C2.324 18.209 2.636 18.222 2.973 18.222C4.78599 18.2264 6.54765 17.6202 7.974 16.501C7.13342 16.4858 6.31858 16.2085 5.64324 15.7078C4.9679 15.2071 4.46578 14.5079 4.207 13.708C4.456 13.745 4.706 13.77 4.968 13.77C5.329 13.77 5.692 13.72 6.029 13.633C5.11676 13.4489 4.29647 12.9544 3.70762 12.2337C3.11876 11.5131 2.79769 10.6107 2.799 9.68004V9.63004C3.336 9.92904 3.959 10.116 4.619 10.141C4.06609 9.77363 3.61272 9.27507 3.29934 8.68983C2.98596 8.1046 2.82231 7.4509 2.823 6.78704C2.823 6.03904 3.022 5.35304 3.371 4.75504C4.38314 6.00006 5.6455 7.01861 7.07634 7.7447C8.50717 8.4708 10.0746 8.88826 11.677 8.97004C11.615 8.67004 11.577 8.35904 11.577 8.04704C11.5767 7.518 11.6807 6.9941 11.8831 6.50528C12.0854 6.01647 12.3821 5.57232 12.7562 5.19823C13.1303 4.82414 13.5744 4.52745 14.0632 4.32512C14.5521 4.12279 15.076 4.01878 15.605 4.01904C16.765 4.01904 17.812 4.50504 18.548 5.29104C19.4498 5.11666 20.3145 4.78747 21.104 4.31804C20.8034 5.24886 20.1738 6.03815 19.333 6.53804C20.1328 6.44682 20.9144 6.2365 21.652 5.91404C21.1011 6.71714 20.4185 7.42139 19.633 7.99704V7.99704Z" fill="black" />
              </svg>
            </a>

            {/*//TODO falta link de linkedin*/}
            <a href="">
              <svg className='iconFooter' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.98292 7.19704C6.19132 7.19704 7.17092 6.21744 7.17092 5.00904C7.17092 3.80065 6.19132 2.82104 4.98292 2.82104C3.77452 2.82104 2.79492 3.80065 2.79492 5.00904C2.79492 6.21744 3.77452 7.19704 4.98292 7.19704Z" fill="black" />
                <path d="M9.2377 8.85493V20.9939H13.0067V14.9909C13.0067 13.4069 13.3047 11.8729 15.2687 11.8729C17.2057 11.8729 17.2297 13.6839 17.2297 15.0909V20.9949H21.0007V14.3379C21.0007 11.0679 20.2967 8.55493 16.4747 8.55493C14.6397 8.55493 13.4097 9.56193 12.9067 10.5149H12.8557V8.85493H9.2377V8.85493ZM3.0957 8.85493H6.8707V20.9939H3.0957V8.85493Z" fill="black" />
              </svg>
            </a>

            <a href="https://www.instagram.com/ongcamaraverde/">
              <svg className='iconFooter' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.999 7.37695C10.7726 7.37695 9.59651 7.86412 8.72934 8.73129C7.86217 9.59846 7.375 10.7746 7.375 12.001C7.375 13.2273 7.86217 14.4034 8.72934 15.2706C9.59651 16.1378 10.7726 16.625 11.999 16.625C13.2254 16.625 14.4015 16.1378 15.2687 15.2706C16.1358 14.4034 16.623 13.2273 16.623 12.001C16.623 10.7746 16.1358 9.59846 15.2687 8.73129C14.4015 7.86412 13.2254 7.37695 11.999 7.37695V7.37695ZM11.999 15.004C11.2023 15.004 10.4382 14.6875 9.87485 14.1241C9.31149 13.5607 8.995 12.7967 8.995 12C8.995 11.2032 9.31149 10.4392 9.87485 9.8758C10.4382 9.31245 11.2023 8.99595 11.999 8.99595C12.7957 8.99595 13.5598 9.31245 14.1231 9.8758C14.6865 10.4392 15.003 11.2032 15.003 12C15.003 12.7967 14.6865 13.5607 14.1231 14.1241C13.5598 14.6875 12.7957 15.004 11.999 15.004V15.004Z" fill="black" />
                <path d="M16.8065 8.28491C17.4019 8.28491 17.8845 7.80227 17.8845 7.20691C17.8845 6.61154 17.4019 6.12891 16.8065 6.12891C16.2112 6.12891 15.7285 6.61154 15.7285 7.20691C15.7285 7.80227 16.2112 8.28491 16.8065 8.28491Z" fill="black" />
                <path d="M20.533 6.11088C20.3015 5.51306 19.9477 4.97017 19.4943 4.51694C19.0409 4.06372 18.4979 3.71015 17.9 3.47888C17.2003 3.21624 16.4611 3.07422 15.714 3.05888C14.751 3.01688 14.446 3.00488 12.004 3.00488C9.56195 3.00488 9.24895 3.00488 8.29395 3.05888C7.54734 3.07344 6.80871 3.21548 6.10995 3.47888C5.51189 3.70988 4.96872 4.06335 4.51529 4.51661C4.06186 4.96987 3.70818 5.51291 3.47695 6.11088C3.21426 6.8105 3.07257 7.54972 3.05795 8.29688C3.01495 9.25888 3.00195 9.56388 3.00195 12.0069C3.00195 14.4489 3.00195 14.7599 3.05795 15.7169C3.07295 16.4649 3.21395 17.2029 3.47695 17.9039C3.70883 18.5016 4.06285 19.0445 4.51639 19.4977C4.96993 19.9509 5.51302 20.3045 6.11095 20.5359C6.80839 20.8091 7.54732 20.9613 8.29595 20.9859C9.25895 21.0279 9.56395 21.0409 12.006 21.0409C14.448 21.0409 14.761 21.0409 15.716 20.9859C16.4631 20.9707 17.2022 20.829 17.902 20.5669C18.4997 20.3351 19.0426 19.9812 19.4959 19.5279C19.9493 19.0745 20.3031 18.5316 20.535 17.9339C20.798 17.2339 20.939 16.4959 20.954 15.7479C20.997 14.7859 21.01 14.4809 21.01 12.0379C21.01 9.59488 21.01 9.28488 20.954 8.32788C20.9423 7.57016 20.7999 6.82013 20.533 6.11088V6.11088ZM19.315 15.6429C19.3085 16.2192 19.2033 16.7901 19.004 17.3309C18.8538 17.7198 18.6239 18.0729 18.329 18.3676C18.0342 18.6622 17.6809 18.8919 17.292 19.0419C16.7572 19.2403 16.1923 19.3455 15.622 19.3529C14.672 19.3969 14.404 19.4079 11.968 19.4079C9.52995 19.4079 9.28095 19.4079 8.31295 19.3529C7.74288 19.3459 7.17828 19.2407 6.64395 19.0419C6.25364 18.8929 5.89895 18.6636 5.60284 18.3688C5.30673 18.0741 5.07579 17.7205 4.92495 17.3309C4.7284 16.7959 4.62326 16.2317 4.61395 15.6619C4.57095 14.7119 4.56095 14.4439 4.56095 12.0079C4.56095 9.57088 4.56095 9.32188 4.61395 8.35288C4.62042 7.77691 4.72561 7.2063 4.92495 6.66588C5.22995 5.87688 5.85495 5.25588 6.64395 4.95388C7.17854 4.75602 7.74298 4.65085 8.31295 4.64288C9.26395 4.59988 9.53095 4.58788 11.968 4.58788C14.405 4.58788 14.655 4.58788 15.622 4.64288C16.1924 4.64974 16.7573 4.75495 17.292 4.95388C17.6809 5.10416 18.0341 5.33408 18.3289 5.62891C18.6238 5.92374 18.8537 6.27695 19.004 6.66588C19.2005 7.20083 19.3056 7.76504 19.315 8.33488C19.358 9.28588 19.369 9.55288 19.369 11.9899C19.369 14.4259 19.369 14.6879 19.326 15.6439H19.315V15.6429Z" fill="black" />
              </svg>
            </a>

            {/*//TODO falta link de youtube*/}
            <a href="">
              <svg className='iconFooter' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.5933 7.20301C21.4794 6.78041 21.2568 6.39501 20.9477 6.08518C20.6386 5.77534 20.2537 5.55187 19.8313 5.43701C18.2653 5.00701 12.0003 5.00001 12.0003 5.00001C12.0003 5.00001 5.73633 4.99301 4.16933 5.40401C3.74725 5.52415 3.36315 5.75078 3.0539 6.06214C2.74464 6.3735 2.52062 6.75913 2.40333 7.18201C1.99033 8.74801 1.98633 11.996 1.98633 11.996C1.98633 11.996 1.98233 15.26 2.39233 16.81C2.62233 17.667 3.29733 18.344 4.15533 18.575C5.73733 19.005 11.9853 19.012 11.9853 19.012C11.9853 19.012 18.2503 19.019 19.8163 18.609C20.2388 18.4943 20.6241 18.2714 20.934 17.9622C21.2439 17.653 21.4677 17.2682 21.5833 16.846C21.9973 15.281 22.0003 12.034 22.0003 12.034C22.0003 12.034 22.0203 8.76901 21.5933 7.20301V7.20301ZM9.99633 15.005L10.0013 9.00501L15.2083 12.01L9.99633 15.005V15.005Z" fill="black" />
              </svg>
            </a>

          </div>

        </div>

        <div className="footer__contact">
          <div className="footer__blockTitle">Datos de contacto:</div>
          <div className="footer__contactCard">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.6159 12H10.5374C1.47155 11.4785 0.184328 3.82615 0.00439445 1.49077C-0.0101039 1.30919 0.0113559 1.12653 0.0675442 0.953267C0.123733 0.779999 0.213545 0.619525 0.331836 0.481039C0.450127 0.342554 0.594571 0.228779 0.756891 0.146234C0.919212 0.0636882 1.09622 0.0139947 1.27777 4.32734e-07H3.81991C4.00472 -0.000178535 4.18532 0.0551587 4.33832 0.158844C4.49132 0.26253 4.60968 0.409786 4.67806 0.581539L5.37934 2.30769C5.44686 2.47548 5.46362 2.65942 5.42753 2.83666C5.39144 3.01389 5.30409 3.17662 5.17634 3.30462L4.19362 4.29692C4.34713 5.16958 4.76488 5.974 5.39036 6.60137C6.01585 7.22873 6.81887 7.64875 7.69079 7.80462L8.69197 6.81231C8.82184 6.68592 8.98603 6.60058 9.16407 6.56693C9.34211 6.53327 9.52612 6.5528 9.69313 6.62308L11.4325 7.32C11.6016 7.39056 11.7459 7.50989 11.8469 7.66277C11.948 7.81566 12.0013 7.99518 12 8.17846V10.6154C12 10.9826 11.8542 11.3348 11.5946 11.5945C11.335 11.8541 10.983 12 10.6159 12ZM1.3885 0.923077C1.26614 0.923077 1.14879 0.971704 1.06226 1.05826C0.97574 1.14481 0.927132 1.26221 0.927132 1.38462V1.42154C1.13936 4.15385 2.5004 10.6154 10.5882 11.0769C10.6488 11.0807 10.7096 11.0724 10.767 11.0526C10.8244 11.0328 10.8773 11.0019 10.9228 10.9616C10.9682 10.9213 11.0052 10.8724 11.0317 10.8177C11.0583 10.7631 11.0737 10.7037 11.0772 10.6431V8.17846L9.33788 7.48154L8.01375 8.79692L7.7923 8.76923C3.77839 8.26615 3.23397 4.25077 3.23397 4.20923L3.20629 3.98769L4.51658 2.66308L3.82453 0.923077H1.3885Z" fill="#333333" />
            </svg>
            <p>Tel: 3xx-xxxx-xxx - 3xx-xxxx-xxx</p>
          </div>
          <div className="footer__contactCard">
            <svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.85266 5.49957C7.85266 6.12469 7.60434 6.7242 7.16232 7.16622C6.72029 7.60825 6.12078 7.85657 5.49567 7.85657C4.87055 7.85657 4.27104 7.60825 3.82902 7.16622C3.387 6.7242 3.13867 6.12469 3.13867 5.49957C3.13867 4.87446 3.387 4.27495 3.82902 3.83293C4.27104 3.3909 4.87055 3.14258 5.49567 3.14258C6.12078 3.14258 6.72029 3.3909 7.16232 3.83293C7.60434 4.27495 7.85266 4.87446 7.85266 5.49957ZM7.067 5.49957C7.067 5.08283 6.90145 4.68316 6.60677 4.38848C6.31208 4.09379 5.91241 3.92824 5.49567 3.92824C5.07892 3.92824 4.67925 4.09379 4.38457 4.38848C4.08989 4.68316 3.92434 5.08283 3.92434 5.49957C3.92434 5.91632 4.08989 6.31599 4.38457 6.61067C4.67925 6.90535 5.07892 7.07091 5.49567 7.07091C5.91241 7.07091 6.31208 6.90535 6.60677 6.61067C6.90145 6.31599 7.067 5.91632 7.067 5.49957Z" fill="#333333" />
              <path d="M9.38904 9.39289C10.4205 8.36085 11 6.96143 11 5.50228C11 4.04313 10.4205 2.6437 9.38904 1.61166C8.87845 1.10073 8.27218 0.695408 7.60488 0.418871C6.93758 0.142335 6.22233 0 5.5 0C4.77767 0 4.06242 0.142335 3.39512 0.418871C2.72782 0.695408 2.12155 1.10073 1.61096 1.61166C0.579449 2.6437 0 4.04313 0 5.50228C0 6.96143 0.579449 8.36085 1.61096 9.39289L2.80595 10.5706L4.41107 12.1302L4.51556 12.2229C5.12445 12.7163 6.01618 12.6848 6.58972 12.1302L8.50281 10.2681L9.38904 9.39289ZM2.16485 2.16556C2.60276 1.72745 3.12269 1.37992 3.69495 1.14281C4.2672 0.905698 4.88057 0.783657 5.5 0.783657C6.11943 0.783657 6.7328 0.905698 7.30505 1.14281C7.87731 1.37992 8.39724 1.72745 8.83515 2.16556C9.69523 3.02622 10.1897 4.18575 10.2155 5.40223C10.2413 6.6187 9.7963 7.79813 8.97343 8.69444L8.83515 8.839L7.79729 9.86351L6.04525 11.5668L5.9714 11.6297C5.83556 11.732 5.67009 11.7874 5.5 11.7874C5.32991 11.7874 5.16444 11.732 5.0286 11.6297L4.95553 11.5668L2.61425 9.28447L2.16485 8.839L2.02657 8.69522C1.2037 7.79892 0.758728 6.61948 0.784492 5.40301C0.810256 4.18654 1.30477 3.027 2.16485 2.16634V2.16556Z" fill="#333333" />
            </svg>

            <p> Carrera XX # XX - XX, Barrio XXXXXXXX</p>
          </div>
          <div className="footer__contactCard">
            <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.1429 0H0.857143C0.629814 0 0.411797 0.101143 0.251051 0.281177C0.0903058 0.461212 0 0.705392 0 0.96V8.64C0 8.89461 0.0903058 9.13879 0.251051 9.31882C0.411797 9.49886 0.629814 9.6 0.857143 9.6H11.1429C11.3702 9.6 11.5882 9.49886 11.749 9.31882C11.9097 9.13879 12 8.89461 12 8.64V0.96C12 0.705392 11.9097 0.461212 11.749 0.281177C11.5882 0.101143 11.3702 0 11.1429 0ZM10.2 0.96L6 4.2144L1.8 0.96H10.2ZM0.857143 8.64V1.3968L5.75571 5.1936C5.82746 5.24934 5.91269 5.27921 6 5.27921C6.08731 5.27921 6.17254 5.24934 6.24429 5.1936L11.1429 1.3968V8.64H0.857143Z" fill="#333333" />
            </svg>

            <p>Email: cvamazorinoquia@gmail.com</p>
          </div>
        </div>

        <div className="footer__links">
          <div className="footer__blockTitle">Enlaces Rápidos</div>
          <a href="/documents">Documentos legales</a>
          <a href="">Politicas de tratamiento de datos</a>
        </div>

        <div className="footer__socialMedia">
          <a href='https://www.facebook.com/cvamazorinoquia'>
            <svg className='iconFooter' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.397 20.9969V12.8009H16.162L16.573 9.59193H13.397V7.54792C13.397 6.62192 13.655 5.98793 14.984 5.98793H16.668V3.12693C15.8487 3.03912 15.0251 2.99672 14.201 2.99993C11.757 2.99993 10.079 4.49193 10.079 7.23093V9.58593H7.33203V12.7949H10.085V20.9969H13.397Z" fill="#343434" />
            </svg>
          </a>

          {/* //TODO falta el link de twitter */}
          <a href="">
            <svg className='iconFooter' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.633 7.99704C19.646 8.17204 19.646 8.34604 19.646 8.52004C19.646 13.845 15.593 19.981 8.186 19.981C5.904 19.981 3.784 19.32 2 18.172C2.324 18.209 2.636 18.222 2.973 18.222C4.78599 18.2264 6.54765 17.6202 7.974 16.501C7.13342 16.4858 6.31858 16.2085 5.64324 15.7078C4.9679 15.2071 4.46578 14.5079 4.207 13.708C4.456 13.745 4.706 13.77 4.968 13.77C5.329 13.77 5.692 13.72 6.029 13.633C5.11676 13.4489 4.29647 12.9544 3.70762 12.2337C3.11876 11.5131 2.79769 10.6107 2.799 9.68004V9.63004C3.336 9.92904 3.959 10.116 4.619 10.141C4.06609 9.77363 3.61272 9.27507 3.29934 8.68983C2.98596 8.1046 2.82231 7.4509 2.823 6.78704C2.823 6.03904 3.022 5.35304 3.371 4.75504C4.38314 6.00006 5.6455 7.01861 7.07634 7.7447C8.50717 8.4708 10.0746 8.88826 11.677 8.97004C11.615 8.67004 11.577 8.35904 11.577 8.04704C11.5767 7.518 11.6807 6.9941 11.8831 6.50528C12.0854 6.01647 12.3821 5.57232 12.7562 5.19823C13.1303 4.82414 13.5744 4.52745 14.0632 4.32512C14.5521 4.12279 15.076 4.01878 15.605 4.01904C16.765 4.01904 17.812 4.50504 18.548 5.29104C19.4498 5.11666 20.3145 4.78747 21.104 4.31804C20.8034 5.24886 20.1738 6.03815 19.333 6.53804C20.1328 6.44682 20.9144 6.2365 21.652 5.91404C21.1011 6.71714 20.4185 7.42139 19.633 7.99704V7.99704Z" fill="black" />
            </svg>
          </a>

          {/*//TODO falta link de linkedin*/}
          <a href="">
            <svg className='iconFooter' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.98292 7.19704C6.19132 7.19704 7.17092 6.21744 7.17092 5.00904C7.17092 3.80065 6.19132 2.82104 4.98292 2.82104C3.77452 2.82104 2.79492 3.80065 2.79492 5.00904C2.79492 6.21744 3.77452 7.19704 4.98292 7.19704Z" fill="black" />
              <path d="M9.2377 8.85493V20.9939H13.0067V14.9909C13.0067 13.4069 13.3047 11.8729 15.2687 11.8729C17.2057 11.8729 17.2297 13.6839 17.2297 15.0909V20.9949H21.0007V14.3379C21.0007 11.0679 20.2967 8.55493 16.4747 8.55493C14.6397 8.55493 13.4097 9.56193 12.9067 10.5149H12.8557V8.85493H9.2377V8.85493ZM3.0957 8.85493H6.8707V20.9939H3.0957V8.85493Z" fill="black" />
            </svg>
          </a>

          <a href="https://www.instagram.com/ongcamaraverde/">
            <svg className='iconFooter' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.999 7.37695C10.7726 7.37695 9.59651 7.86412 8.72934 8.73129C7.86217 9.59846 7.375 10.7746 7.375 12.001C7.375 13.2273 7.86217 14.4034 8.72934 15.2706C9.59651 16.1378 10.7726 16.625 11.999 16.625C13.2254 16.625 14.4015 16.1378 15.2687 15.2706C16.1358 14.4034 16.623 13.2273 16.623 12.001C16.623 10.7746 16.1358 9.59846 15.2687 8.73129C14.4015 7.86412 13.2254 7.37695 11.999 7.37695V7.37695ZM11.999 15.004C11.2023 15.004 10.4382 14.6875 9.87485 14.1241C9.31149 13.5607 8.995 12.7967 8.995 12C8.995 11.2032 9.31149 10.4392 9.87485 9.8758C10.4382 9.31245 11.2023 8.99595 11.999 8.99595C12.7957 8.99595 13.5598 9.31245 14.1231 9.8758C14.6865 10.4392 15.003 11.2032 15.003 12C15.003 12.7967 14.6865 13.5607 14.1231 14.1241C13.5598 14.6875 12.7957 15.004 11.999 15.004V15.004Z" fill="black" />
              <path d="M16.8065 8.28491C17.4019 8.28491 17.8845 7.80227 17.8845 7.20691C17.8845 6.61154 17.4019 6.12891 16.8065 6.12891C16.2112 6.12891 15.7285 6.61154 15.7285 7.20691C15.7285 7.80227 16.2112 8.28491 16.8065 8.28491Z" fill="black" />
              <path d="M20.533 6.11088C20.3015 5.51306 19.9477 4.97017 19.4943 4.51694C19.0409 4.06372 18.4979 3.71015 17.9 3.47888C17.2003 3.21624 16.4611 3.07422 15.714 3.05888C14.751 3.01688 14.446 3.00488 12.004 3.00488C9.56195 3.00488 9.24895 3.00488 8.29395 3.05888C7.54734 3.07344 6.80871 3.21548 6.10995 3.47888C5.51189 3.70988 4.96872 4.06335 4.51529 4.51661C4.06186 4.96987 3.70818 5.51291 3.47695 6.11088C3.21426 6.8105 3.07257 7.54972 3.05795 8.29688C3.01495 9.25888 3.00195 9.56388 3.00195 12.0069C3.00195 14.4489 3.00195 14.7599 3.05795 15.7169C3.07295 16.4649 3.21395 17.2029 3.47695 17.9039C3.70883 18.5016 4.06285 19.0445 4.51639 19.4977C4.96993 19.9509 5.51302 20.3045 6.11095 20.5359C6.80839 20.8091 7.54732 20.9613 8.29595 20.9859C9.25895 21.0279 9.56395 21.0409 12.006 21.0409C14.448 21.0409 14.761 21.0409 15.716 20.9859C16.4631 20.9707 17.2022 20.829 17.902 20.5669C18.4997 20.3351 19.0426 19.9812 19.4959 19.5279C19.9493 19.0745 20.3031 18.5316 20.535 17.9339C20.798 17.2339 20.939 16.4959 20.954 15.7479C20.997 14.7859 21.01 14.4809 21.01 12.0379C21.01 9.59488 21.01 9.28488 20.954 8.32788C20.9423 7.57016 20.7999 6.82013 20.533 6.11088V6.11088ZM19.315 15.6429C19.3085 16.2192 19.2033 16.7901 19.004 17.3309C18.8538 17.7198 18.6239 18.0729 18.329 18.3676C18.0342 18.6622 17.6809 18.8919 17.292 19.0419C16.7572 19.2403 16.1923 19.3455 15.622 19.3529C14.672 19.3969 14.404 19.4079 11.968 19.4079C9.52995 19.4079 9.28095 19.4079 8.31295 19.3529C7.74288 19.3459 7.17828 19.2407 6.64395 19.0419C6.25364 18.8929 5.89895 18.6636 5.60284 18.3688C5.30673 18.0741 5.07579 17.7205 4.92495 17.3309C4.7284 16.7959 4.62326 16.2317 4.61395 15.6619C4.57095 14.7119 4.56095 14.4439 4.56095 12.0079C4.56095 9.57088 4.56095 9.32188 4.61395 8.35288C4.62042 7.77691 4.72561 7.2063 4.92495 6.66588C5.22995 5.87688 5.85495 5.25588 6.64395 4.95388C7.17854 4.75602 7.74298 4.65085 8.31295 4.64288C9.26395 4.59988 9.53095 4.58788 11.968 4.58788C14.405 4.58788 14.655 4.58788 15.622 4.64288C16.1924 4.64974 16.7573 4.75495 17.292 4.95388C17.6809 5.10416 18.0341 5.33408 18.3289 5.62891C18.6238 5.92374 18.8537 6.27695 19.004 6.66588C19.2005 7.20083 19.3056 7.76504 19.315 8.33488C19.358 9.28588 19.369 9.55288 19.369 11.9899C19.369 14.4259 19.369 14.6879 19.326 15.6439H19.315V15.6429Z" fill="black" />
            </svg>
          </a>

          {/*//TODO falta link de youtube*/}
          <a href="">
            <svg className='iconFooter' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.5933 7.20301C21.4794 6.78041 21.2568 6.39501 20.9477 6.08518C20.6386 5.77534 20.2537 5.55187 19.8313 5.43701C18.2653 5.00701 12.0003 5.00001 12.0003 5.00001C12.0003 5.00001 5.73633 4.99301 4.16933 5.40401C3.74725 5.52415 3.36315 5.75078 3.0539 6.06214C2.74464 6.3735 2.52062 6.75913 2.40333 7.18201C1.99033 8.74801 1.98633 11.996 1.98633 11.996C1.98633 11.996 1.98233 15.26 2.39233 16.81C2.62233 17.667 3.29733 18.344 4.15533 18.575C5.73733 19.005 11.9853 19.012 11.9853 19.012C11.9853 19.012 18.2503 19.019 19.8163 18.609C20.2388 18.4943 20.6241 18.2714 20.934 17.9622C21.2439 17.653 21.4677 17.2682 21.5833 16.846C21.9973 15.281 22.0003 12.034 22.0003 12.034C22.0003 12.034 22.0203 8.76901 21.5933 7.20301V7.20301ZM9.99633 15.005L10.0013 9.00501L15.2083 12.01L9.99633 15.005V15.005Z" fill="black" />
            </svg>
          </a>

        </div>

      </div>

      <div className="copyright">
        © Todos los derechos reservados. Diseñado por Isajs & Mican.
      </div>

      <div className='contact' onClick={() => { sendWaMessage('3112081395', 'Hola, estoy interesado en conocer más sobre la Fundación. Gracias') }}>
        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.25025 30.0812L9.82241 30.365C12.2067 31.7839 14.877 32.446 17.5473 32.446C25.9397 32.446 32.8061 25.6352 32.8061 17.3109C32.8061 13.338 31.1848 9.45958 28.3239 6.6217C25.4628 3.78383 21.648 2.17578 17.5473 2.17578C9.15496 2.17578 2.28837 8.98658 2.3838 17.4056C2.3838 20.2433 3.2421 22.9867 4.67257 25.3514L5.05401 25.9191L3.52825 31.5002L9.25025 30.0812Z" fill="#00E676" />
          <path d="M29.9455 5.1081C26.7029 1.79735 22.2207 0 17.643 0C7.91562 0 0.0954282 7.85132 0.19072 17.4053C0.19072 20.4324 1.04903 23.3649 2.47963 26.0135L0 35L9.25066 32.6351C11.8256 34.0541 14.6865 34.7163 17.5477 34.7163C27.1798 34.7163 35 26.8648 35 17.311C35 12.6757 33.188 8.32432 29.9456 5.1081H29.9455ZM17.643 31.7839C15.0681 31.7839 12.4932 31.1219 10.2997 29.7975L9.72752 29.5137L4.19624 30.9326L5.62671 25.5408L5.24527 24.9731C1.04903 18.257 3.05179 9.36485 9.91824 5.20262C16.7847 1.04052 25.6539 3.02705 29.8502 9.83785C34.0463 16.6486 32.0435 25.446 25.1772 29.6082C22.9836 31.0271 20.3134 31.7838 17.643 31.7838V31.7839ZM26.0354 21.284L24.9863 20.811C24.9863 20.811 23.4606 20.1488 22.5068 19.6758C22.4114 19.6758 22.3161 19.5812 22.2207 19.5812C21.9345 19.5812 21.7438 19.6758 21.5531 19.7705C21.5531 19.7705 21.4578 19.865 20.1226 21.3785C20.0272 21.5677 19.8365 21.6624 19.6458 21.6624H19.5503C19.455 21.6624 19.2643 21.5677 19.1689 21.4732L18.692 21.284C17.643 20.811 16.6894 20.2434 15.9264 19.4867C15.7357 19.2975 15.4495 19.1083 15.2588 18.9191C14.5912 18.257 13.9236 17.5001 13.4469 16.6488L13.3515 16.4596C13.2562 16.365 13.2562 16.2704 13.1608 16.0813C13.1608 15.8921 13.1608 15.7029 13.2562 15.6083C13.2562 15.6083 13.6376 15.1353 13.9236 14.8516C14.1145 14.6623 14.2098 14.3786 14.4005 14.1894C14.5912 13.9056 14.6866 13.5272 14.5912 13.2434C14.4959 12.7704 13.3515 10.2163 13.0655 9.64881C12.8746 9.36498 12.684 9.27047 12.3979 9.17581H11.3488C11.158 9.17581 10.9674 9.27046 10.7766 9.27046L10.6811 9.36498C10.4904 9.45964 10.2997 9.64881 10.109 9.74333C9.91824 9.93264 9.82282 10.1217 9.6321 10.311C8.96451 11.1623 8.58307 12.2029 8.58307 13.2434C8.58307 14.0001 8.77379 14.7569 9.05994 15.4191L9.15537 15.7029C10.0137 17.5001 11.158 19.1083 12.684 20.5272L13.0655 20.9055C13.3515 21.1894 13.6376 21.3785 13.8283 21.6622C15.8311 23.3651 18.1199 24.5948 20.6948 25.2569C20.9809 25.3515 21.3624 25.3515 21.6485 25.4461H22.6021C23.079 25.4461 23.6512 25.2569 24.0327 25.0678C24.3187 24.8786 24.5095 24.8786 24.7002 24.6894L24.891 24.5001C25.0818 24.3109 25.2725 24.2164 25.4632 24.0272C25.6539 23.8381 25.8446 23.6489 25.9401 23.4596C26.1308 23.0812 26.2261 22.6082 26.3215 22.1354V21.4732C26.3215 21.4732 26.2261 21.3785 26.0354 21.284V21.284Z" fill="white" />
        </svg>


      </div>
    </footer>
  );
};
