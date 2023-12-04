/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        move_back :{
          'from' : { transform: 'translate3d(0px, 0px, 0px)'},
          'to': { transform: 'translate3d(1000px, 0px, 0px)'}
        },
        hover: {
          'O%' : {
            transform : 'scale(1)'
          },
          '100%' : {
            transform: 'scale(1.2)'
          }
        },
        astroBounce : {
          '0%' : {
            transform: 'scale(1)'
          },
          '100%' : {
            transform: 'scale(1.04)'
          }
        },
        zoom: {
          '0%' : {
            transform: 'scale(1)'
          },
          '100%': {
            transform: 'scale(1.5)'
          },
        },
        twinkle: {
          '0%': {
             'box-shadow': '0 0 14px rgba(0,0,0,0.2)' 
          },
          '50%': {
            'box-shadow': '0 0 14px rgba(0,0,0,0.99)' 
         },
         '100%': {
          'box-shadow': '0 0 14px rgba(0,0,0,0.2)' 
       }
        }
      }, 
      backgroundImage: {
        "stars": "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/stars.png)",
        "twinkling": "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/twinkling.png)" 
      },
      backgroundSize : {
        'auto' : 'auto',
        'cover' : 'cover',
        'contain': 'contain',
        '1000' : '1000px 1000px'
      },
      animation: {
        'zoom': 'zoom 20s alternate infinite',
        'twinkle' : 'twinkle 1s ease-out infinite',
        'moveBackground': 'move_back 70s linear infinite',
        'astrobounce' : 'astroBounce 10s alternate infinite',
        'hover' : 'hover 1.5s ease-in-out'
      },
      screens: {
        'xxxs' : '280px',
        'xxs' : '320px',
        'xs' : '390px',
        "ss" : "450px",
        's' : '520px'
      },
      colors: {
        green: "rgb(144, 248, 40)",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        black: "black",
        gray: "#D8D9DA",
        purp: "rgb(13, 13, 13)",
        purplight: "rgb(69, 69, 69)"
      },
      fontFamily: {
        opensans:  "'Open Sans', sans-serif",
        mono: "monospace"
      },
      boxShadow: {
        star: `3vw -13vh 1px 0px #fff,22vw -24vh 2px 3px #fff,11vw 39vh 0px 2px #fff,0vw 46vh 1px 1px #fff,42vw 47vh 3px 2px #fff,-18vw -6vh 0px 1px #fff,14vw -48vh 0px 0px #fff,-18vw 8vh 1px 3px #fff,-2vw -39vh 1px 0px #fff,-11vw -49vh 2px 3px #fff,-20vw 6vh 2px 2px #fff,35vw 10vh 0px 3px #fff,-4vw 2vh 1px 3px #fff,41vw -19vh 3px 2px #fff,-33vw 42vh 1px 2px #fff,36vw 8vh 2px 1px #fff,37vw 44vh 2px 3px #fff,-42vw -28vh 3px 3px #fff,-12vw -2vh 0px 1px #fff,-9vw 37vh 1px 1px #fff,-44vw 21vh 1px 2px #fff,23vw 41vh 2px 3px #fff,-6vw -23vh 0px 3px #fff,14vw 21vh 3px 0px #fff,
        3vw -8vh 3px 0px #fff,-38vw -7vh 0px 3px #fff,15vw 35vh 0px 0px #fff,9vw 15vh 0px 1px #fff,24vw -22vh 0px 0px #fff,18vw -38vh 0px 1px #fff,-16vw -47vh 2px 1px #fff,1vw 26vh 1px 0px #fff,23vw 47vh 0px 3px #fff,-48vw 8vh 2px 3px #fff,38vw -4vh 3px 2px #fff,-1vw 30vh 0px 1px #fff,-19vw -26vh 1px 1px #fff,-3vw -10vh 3px 2px #fff,-49vw -7vh 2px 2px #fff,27vw -50vh 3px 2px #fff,9vw -43vh 3px 0px #fff,-28vw 5vh 0px 1px #fff,36vw -23vh 2px 1px #fff,27vw 26vh 2px 3px #fff,13vw 31vh 1px 2px #fff,36vw -43vh 2px 0px #fff,-16vw -27vh 1px 0px #fff,-32vw -15vh 0px 3px #fff,28vw -11vh 1px 1px #fff,
        -12vw 11vh 3px 3px #fff,-1vw -16vh 1px 1px #fff,-47vw 24vh 2px 0px #fff,-11vw -24vh 1px 1px #fff,-24vw 34vh 0px 3px #fff,4vw 20vh 3px 3px #fff,-1vw -34vh 1px 0px #fff,1vw 47vh 1px 1px #fff,46vw 40vh 3px 0px #fff,39vw -25vh 1px 2px #fff,6vw -45vh 3px 3px #fff,-22vw 47vh 0px 0px #fff,50vw -2vh 0px 0px #fff,-9vw -12vh 1px 3px #fff,-5vw -10vh 2px 3px #fff,11vw -21vh 2px 0px #fff,-29vw 12vh 1px 2px #fff,-1vw 40vh 3px 3px #fff,48vw 40vh 1px 1px #fff,18vw -42vh 2px 3px #fff,-47vw 31vh 1px 2px #fff,11vw 4vh 1px 0px #fff,-40vw -39vh 0px 3px #fff,-24vw -42vh 3px 1px #fff,6vw 8vh 2px 1px #fff,-28vw -11vh 1px 0px #fff,5vw 31vh 0px 1px #fff,5vw -21vh 1px 1px #fff,-34vw -47vh 2px 0px #fff,37vw 7vh 2px 3px #fff,36vw 18vh 3px 2px #fff,21vw -49vh 1px 0px #fff,11vw -24vh 2px 2px #fff,43vw -19vh 2px 3px #fff,-7vw 3vh 3px 1px #fff,46vw 27vh 3px 1px #fff,-4vw 35vh 1px 3px #fff,17vw -42vh 3px 3px #fff,-42vw -26vh 1px 3px #fff,-36vw 13vh 0px 3px #fff,-22vw 15vh 2px 3px #fff,17vw 39vh 1px 1px #fff,-28vw 17vh 1px 3px #fff,47vw 2vh 1px 0px #fff,17vw 2vh 1px 1px #fff,11vw 4vh 0px 2px #fff,-11vw 4vh 3px 3px #fff,16vw 50vh 0px 2px #fff,14vw 40vh 2px 3px #fff,27vw 15vh 2px 0px #fff,-19vw -26vh 3px 0px #fff,-11vw 2vh 1px 3px #fff,34vw 50vh 3px 0px #fff,13vw -44vh 0px 3px #fff,-23vw 38vh 0px 2px #fff,31vw 12vh 3px 1px #fff,-7vw 22vh 3px 0px #fff,1vw 20vh 3px 0px #fff,9vw 5vh 0px 0px #fff,-20vw 46vh 2px 0px #fff,-8vw -24vh 0px 0px #fff,28vw 15vh 3px 3px #fff,-25vw -33vh 1px 2px #fff,1vw -28vh 3px 3px #fff,-23vw -32vh 0px 0px #fff,33vw -33vh 0px 0px #fff,31vw -41vh 0px 3px #fff,32vw 8vh 2px 2px #fff,-25vw -9vh 0px 2px #fff,41vw -21vh 0px 3px #fff,-25vw 43vh 1px 1px #fff,-34vw -33vh 3px 1px #fff,48vw 36vh 2px 2px #fff,-24vw 25vh 3px 3px #fff,6vw -36vh 0px 3px #fff,-47vw 24vh 3px 0px #fff,-29vw -2vh 0px 2px #fff,-47vw -11vh 2px 1px #fff,3vw -13vh 0px 1px #fff,42vw -10vh 2px 3px #fff,7vw 22vh 0px 0px #fff,-42vw -5vh 0px 3px #fff,43vw -38vh 0px 1px #fff,-43vw 30vh 0px 1px #fff,-20vw 49vh 1px 3px #fff,-1vw -33vh 2px 1px #fff,9vw -47vh 3px 3px #fff,1vw -26vh 1px 3px #fff,23vw 19vh 3px 1px #fff,34vw -40vh 2px 2px #fff,-11vw 22vh 3px 2px #fff,5vw -36vh 3px 3px #fff,-43vw -40vh 3px 3px #fff,-2vw -28vh 3px 0px #fff,34vw 2vh 0px 0px #fff,7vw 48vh 3px 0px #fff,-30vw -7vh 2px 1px #fff,0vw 48vh 2px 3px #fff,48vw -28vh 0px 2px #fff,23vw 11vh 3px 2px #fff,6vw 45vh 1px 1px #fff
`
            }
    },
  },
  plugins: [],
}