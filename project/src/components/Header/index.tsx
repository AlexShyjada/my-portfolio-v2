import Link from "next/link";
import { Chats } from "phosphor-react";
import { Button, Container, Navlink, StyledHeader } from "./styles";




export function Header() {
  return (
    <StyledHeader>
      <Container className="container">
        <svg
          width="120"
          height="22"
          viewBox="0 0 120 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="1"
            y="13.3999"
            width="79"
            height="5"
            rx="2.5"
            fill="#0061EA"
          />
          <path
            d="M10.9803 13.92H5.74031L4.90031 16.4H1.32031L6.40031 2.36H10.3603L15.4403 16.4H11.8203L10.9803 13.92ZM10.1003 11.28L8.36031 6.14L6.64031 11.28H10.1003Z"
            fill="#FAFAFA"
          />
          <path d="M19.2064 1.6V16.4H15.7864V1.6H19.2064Z" fill="#FAFAFA" />
          <path
            d="M31.0048 10.64C31.0048 10.96 30.9848 11.2933 30.9448 11.64H23.2048C23.2582 12.3333 23.4782 12.8667 23.8648 13.24C24.2648 13.6 24.7515 13.78 25.3248 13.78C26.1782 13.78 26.7715 13.42 27.1048 12.7H30.7448C30.5582 13.4333 30.2182 14.0933 29.7248 14.68C29.2448 15.2667 28.6382 15.7267 27.9048 16.06C27.1715 16.3933 26.3515 16.56 25.4448 16.56C24.3515 16.56 23.3782 16.3267 22.5248 15.86C21.6715 15.3933 21.0048 14.7267 20.5248 13.86C20.0448 12.9933 19.8048 11.98 19.8048 10.82C19.8048 9.66 20.0382 8.64667 20.5048 7.78C20.9848 6.91333 21.6515 6.24667 22.5048 5.78C23.3582 5.31333 24.3382 5.08 25.4448 5.08C26.5248 5.08 27.4848 5.30667 28.3248 5.76C29.1648 6.21333 29.8182 6.86 30.2848 7.7C30.7648 8.54 31.0048 9.52 31.0048 10.64ZM27.5048 9.74C27.5048 9.15333 27.3048 8.68667 26.9048 8.34C26.5048 7.99333 26.0048 7.82 25.4048 7.82C24.8315 7.82 24.3448 7.98667 23.9448 8.32C23.5582 8.65333 23.3182 9.12667 23.2248 9.74H27.5048Z"
            fill="#FAFAFA"
          />
          <path
            d="M38.2091 16.4L36.0691 13.3L34.2691 16.4H30.5691L34.2491 10.7L30.4691 5.24H34.3091L36.4491 8.32L38.2491 5.24H41.9491L38.2091 10.86L42.0491 16.4H38.2091Z"
            fill="#FAFAFA"
          />
          <path
            d="M43.3469 16.54C42.9335 16.54 42.5869 16.4 42.3069 16.12C42.0269 15.84 41.8869 15.4933 41.8869 15.08C41.8869 14.6667 42.0269 14.32 42.3069 14.04C42.5869 13.76 42.9335 13.62 43.3469 13.62C43.7469 13.62 44.0869 13.76 44.3669 14.04C44.6469 14.32 44.7869 14.6667 44.7869 15.08C44.7869 15.4933 44.6469 15.84 44.3669 16.12C44.0869 16.4 43.7469 16.54 43.3469 16.54Z"
            fill="#FAFAFA"
          />
          <path
            d="M50.6311 16.54C49.6978 16.54 48.8578 16.38 48.1111 16.06C47.3644 15.7267 46.7778 15.26 46.3511 14.66C45.9244 14.06 45.7111 13.36 45.7111 12.56H48.1511C48.2044 13.16 48.4378 13.6533 48.8511 14.04C49.2778 14.4267 49.8711 14.62 50.6311 14.62C51.4178 14.62 52.0311 14.4333 52.4711 14.06C52.9111 13.6733 53.1311 13.18 53.1311 12.58C53.1311 12.1133 52.9911 11.7333 52.7111 11.44C52.4444 11.1467 52.1044 10.92 51.6911 10.76C51.2911 10.6 50.7311 10.4267 50.0111 10.24C49.1044 10 48.3644 9.76 47.7911 9.52C47.2311 9.26667 46.7511 8.88 46.3511 8.36C45.9511 7.84 45.7511 7.14667 45.7511 6.28C45.7511 5.48 45.9511 4.78 46.3511 4.18C46.7511 3.58 47.3111 3.12 48.0311 2.8C48.7511 2.48 49.5844 2.32 50.5311 2.32C51.8778 2.32 52.9778 2.66 53.8311 3.34C54.6978 4.00667 55.1778 4.92667 55.2711 6.1H52.7511C52.7111 5.59333 52.4711 5.16 52.0311 4.8C51.5911 4.44 51.0111 4.26 50.2911 4.26C49.6378 4.26 49.1044 4.42667 48.6911 4.76C48.2778 5.09333 48.0711 5.57333 48.0711 6.2C48.0711 6.62667 48.1978 6.98 48.4511 7.26C48.7178 7.52667 49.0511 7.74 49.4511 7.9C49.8511 8.06 50.3978 8.23333 51.0911 8.42C52.0111 8.67333 52.7578 8.92667 53.3311 9.18C53.9178 9.43333 54.4111 9.82667 54.8111 10.36C55.2244 10.88 55.4311 11.58 55.4311 12.46C55.4311 13.1667 55.2378 13.8333 54.8511 14.46C54.4778 15.0867 53.9244 15.5933 53.1911 15.98C52.4711 16.3533 51.6178 16.54 50.6311 16.54Z"
            fill="#FAFAFA"
          />
          <path
            d="M62.6214 5.2C63.4614 5.2 64.2081 5.38 64.8614 5.74C65.5281 6.1 66.0481 6.63333 66.4214 7.34C66.8081 8.04667 67.0014 8.9 67.0014 9.9V16.4H64.7414V10.24C64.7414 9.25333 64.4947 8.5 64.0014 7.98C63.5081 7.44667 62.8347 7.18 61.9814 7.18C61.1281 7.18 60.4481 7.44667 59.9414 7.98C59.4481 8.5 59.2014 9.25333 59.2014 10.24V16.4H56.9214V1.6H59.2014V6.66C59.5881 6.19333 60.0747 5.83333 60.6614 5.58C61.2614 5.32667 61.9147 5.2 62.6214 5.2Z"
            fill="#FAFAFA"
          />
          <path
            d="M78.6297 5.38L71.8697 21.58H69.5097L71.7497 16.22L67.4097 5.38H69.9497L73.0497 13.78L76.2697 5.38H78.6297Z"
            fill="#FAFAFA"
          />
          <path
            d="M80.3103 3.92C79.897 3.92 79.5503 3.78 79.2703 3.5C78.9903 3.22 78.8503 2.87333 78.8503 2.46C78.8503 2.04667 78.9903 1.7 79.2703 1.42C79.5503 1.14 79.897 1 80.3103 1C80.7103 1 81.0503 1.14 81.3303 1.42C81.6103 1.7 81.7503 2.04667 81.7503 2.46C81.7503 2.87333 81.6103 3.22 81.3303 3.5C81.0503 3.78 80.7103 3.92 80.3103 3.92ZM81.4303 18.56C81.4303 19.64 81.157 20.42 80.6103 20.9C80.077 21.3933 79.297 21.64 78.2703 21.64H77.0903V19.72H77.8703C78.337 19.72 78.6636 19.6267 78.8503 19.44C79.0503 19.2667 79.1503 18.9733 79.1503 18.56V5.38H81.4303V18.56Z"
            fill="#FAFAFA"
          />
          <path
            d="M82.4637 10.84C82.4637 9.73333 82.6904 8.75333 83.1437 7.9C83.6104 7.04667 84.2371 6.38667 85.0238 5.92C85.8238 5.44 86.7038 5.2 87.6637 5.2C88.5304 5.2 89.2837 5.37333 89.9237 5.72C90.5771 6.05333 91.0971 6.47333 91.4837 6.98V5.38H93.7837V16.4H91.4837V14.76C91.0971 15.28 90.5704 15.7133 89.9037 16.06C89.2371 16.4067 88.4771 16.58 87.6237 16.58C86.6771 16.58 85.8104 16.34 85.0238 15.86C84.2371 15.3667 83.6104 14.6867 83.1437 13.82C82.6904 12.94 82.4637 11.9467 82.4637 10.84ZM91.4837 10.88C91.4837 10.12 91.3237 9.46 91.0037 8.9C90.6971 8.34 90.2904 7.91333 89.7837 7.62C89.2771 7.32667 88.7304 7.18 88.1437 7.18C87.5571 7.18 87.0104 7.32667 86.5037 7.62C85.9971 7.9 85.5837 8.32 85.2637 8.88C84.9571 9.42667 84.8037 10.08 84.8037 10.84C84.8037 11.6 84.9571 12.2667 85.2637 12.84C85.5837 13.4133 85.9971 13.8533 86.5037 14.16C87.0237 14.4533 87.5704 14.6 88.1437 14.6C88.7304 14.6 89.2771 14.4533 89.7837 14.16C90.2904 13.8667 90.6971 13.44 91.0037 12.88C91.3237 12.3067 91.4837 11.64 91.4837 10.88Z"
            fill="#FAFAFA"
          />
          <path
            d="M94.8184 10.84C94.8184 9.73333 95.0451 8.75333 95.4984 7.9C95.9651 7.04667 96.5918 6.38667 97.3784 5.92C98.1784 5.44 99.0651 5.2 100.038 5.2C100.758 5.2 101.465 5.36 102.158 5.68C102.865 5.98667 103.425 6.4 103.838 6.92V1.6H106.138V16.4H103.838V14.74C103.465 15.2733 102.945 15.7133 102.278 16.06C101.625 16.4067 100.872 16.58 100.018 16.58C99.0584 16.58 98.1784 16.34 97.3784 15.86C96.5918 15.3667 95.9651 14.6867 95.4984 13.82C95.0451 12.94 94.8184 11.9467 94.8184 10.84ZM103.838 10.88C103.838 10.12 103.678 9.46 103.358 8.9C103.052 8.34 102.645 7.91333 102.138 7.62C101.632 7.32667 101.085 7.18 100.498 7.18C99.9118 7.18 99.3651 7.32667 98.8584 7.62C98.3518 7.9 97.9384 8.32 97.6184 8.88C97.3118 9.42667 97.1584 10.08 97.1584 10.84C97.1584 11.6 97.3118 12.2667 97.6184 12.84C97.9384 13.4133 98.3518 13.8533 98.8584 14.16C99.3784 14.4533 99.9251 14.6 100.498 14.6C101.085 14.6 101.632 14.4533 102.138 14.16C102.645 13.8667 103.052 13.44 103.358 12.88C103.678 12.3067 103.838 11.64 103.838 10.88Z"
            fill="#FAFAFA"
          />
          <path
            d="M107.173 10.84C107.173 9.73333 107.4 8.75333 107.853 7.9C108.32 7.04667 108.946 6.38667 109.733 5.92C110.533 5.44 111.413 5.2 112.373 5.2C113.24 5.2 113.993 5.37333 114.633 5.72C115.286 6.05333 115.806 6.47333 116.193 6.98V5.38H118.493V16.4H116.193V14.76C115.806 15.28 115.28 15.7133 114.613 16.06C113.946 16.4067 113.186 16.58 112.333 16.58C111.386 16.58 110.52 16.34 109.733 15.86C108.946 15.3667 108.32 14.6867 107.853 13.82C107.4 12.94 107.173 11.9467 107.173 10.84ZM116.193 10.88C116.193 10.12 116.033 9.46 115.713 8.9C115.406 8.34 115 7.91333 114.493 7.62C113.986 7.32667 113.44 7.18 112.853 7.18C112.266 7.18 111.72 7.32667 111.213 7.62C110.706 7.9 110.293 8.32 109.973 8.88C109.666 9.42667 109.513 10.08 109.513 10.84C109.513 11.6 109.666 12.2667 109.973 12.84C110.293 13.4133 110.706 13.8533 111.213 14.16C111.733 14.4533 112.28 14.6 112.853 14.6C113.44 14.6 113.986 14.4533 114.493 14.16C115 13.8667 115.406 13.44 115.713 12.88C116.033 12.3067 116.193 11.64 116.193 10.88Z"
            fill="#FAFAFA"
          />
        </svg>

        <nav className="linksContainer">
          <Link href="/#Hero" legacyBehavior>
            <Navlink className="navLink">Início</Navlink>
          </Link>

          <Link href="/#Servicos" legacyBehavior>
            <Navlink className="navLink">Serviços</Navlink>
          </Link>

          <Link href="/#Portifolio" legacyBehavior>
            <Navlink className="navLink">Serviços</Navlink>
          </Link>

          <Link href="/#SobreMim" legacyBehavior>
            <Navlink className="navLink">Serviços</Navlink>
          </Link>

          <Button className="contactButton">
            <Link href="/#Contact" legacyBehavior>
              <a>
                Entrar em contato
                <Chats size={20} />
              </a>
            </Link>
          </Button>
        </nav>
      </Container>
    </StyledHeader>
  );
}
