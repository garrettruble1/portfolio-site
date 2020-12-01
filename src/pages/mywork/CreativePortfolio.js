import { nanoid } from 'nanoid';

import LunasCard from './projectFiles/lunasCard.png';
import LunasAnimation from './projectFiles/lunasAnimation.gif';
import LunasWord from './projectFiles/lunasWordmark.png';
import LunasLogo from './projectFiles/lunasLogo.png';

import MaleficentCard from './projectFiles/maleficentCard.jpg'
import MaleficentImage from './projectFiles/maleficentImage.jpg'
import MaleficentRef from './projectFiles/maleficentReference.png';

import InkCard from './projectFiles/inkCard.jpg';
import KimMinJu from './projectFiles/kimMinjuInk.jpg';
import Ruben from './projectFiles/rubenInk.jpg';
import Depressed from './projectFiles/depressedInk.jpg';
import Precious from './projectFiles/preciousInk.jpg';
import Marilyn from './projectFiles/marilynInk.jpg';
import Pattern from './projectFiles/patternInk.jpg';
import Husky from './projectFiles/huskyInk.jpg';

import CoralCard from './projectFiles/coralPortraitCard.jpg';
import CoralImage from './projectFiles/coralPortraitImage.jpg';
import CoralImage2 from './projectFiles/coralPortraitDrawing.jpg';
import CoralImage3 from './projectFiles/coralPortraitRef.jpg';

import CycleCard from './projectFiles/cyclePortraitCard.jpg';
import CycleImage from './projectFiles/cyclePortraitImage.jpg';
import CycleRef from './projectFiles/cycleRef.jpg';

import RamonaCard from './projectFiles/ramonaFlowersCard.png';
import RamonaSeries from './projectFiles/ramonaSeries.gif';
import RamonaImage from './projectFiles/ramonaFlowersImage.png';
import RamonaRef from './projectFiles/ramonaFlowersRef.jpg';

import PerfumeCard from './projectFiles/perfumeCard.jpg';
import Perfume1 from './projectFiles/perfumeImage1.png';
import Perfume2 from './projectFiles/perfumeImage2.png';
import Perfume3 from './projectFiles/perfumeImage3.png';
import Perfume4 from './projectFiles/perfumeImage4.png';
import Perfume5 from './projectFiles/perfumeImage5.png';
import Perfume6 from './projectFiles/perfumeImage6.jpg';

import PatientCard from './projectFiles/patientCard.png';
import PatientPreview from './projectFiles/patientPreview.gif';

const CreativePortfolio = [
    {
        id: nanoid(),
        cardImage: LunasCard,
        previewImages: [
            {
                label: "Animated Logo",
                image: LunasAnimation
            },
            {
                label: "Lunas Wordmark",
                image: LunasWord
            },
            {
                label: "Lunas Imagemark",
                image: LunasLogo
            },
        ],
        title: "Lunas",
        medium: "Branding Project",
        description: "Lunas is my personal brand. It's the look, feel, logo, and word that I want to be able to stamp on all my work, no matter how eclectic and diverse the project or style may be. I wanted simple, elegent, and highly recognizable elements to use as my 'signature'. I love the symbology of moths and always found them fascinating, so I chose a moth as my main symbol. It's the most successful and comprehensive packet of branding elements I've created for myself so far, and I intend to continue adding to and modifying it, so it will continue to change and grow as I do.",
        skills: ["ps", "ai", "ae"],
        links: []
    },
    {
        id: nanoid(),
        cardImage: MaleficentCard,
        previewImages: [
            {
                label: "Finished Drawing",
                image: MaleficentImage
            },
            {
                label: "Reference Image",
                image: MaleficentRef
            }
        ],
        title: "Maleficent",
        medium: "Traditional Pencil Portrait",
        description: "This is a traditional pencil drawing of Angelina Jolie as Maleficent. I completed this piece as a final project for a drawing class in my college education. It was completed on 18in x 24in drawing paper using graphite pencil for the guide lines, and colored using Prismacolor colored pencils.",
        skills: ["pnc"],
        links: [
            {
                site: "yt",
                text: "Maleficent Movie Trailer",
                destination: "https://www.youtube.com/watch?v=w-XO4XiRop0"
            }
        ]
    },
    {
        id: nanoid(),
        cardImage: InkCard,
        previewImages: [
            {
                label: "Kim Min Ju",
                image: KimMinJu
            },
            {
                label: "Ruben",
                image: Ruben
            },
            {
                label: "Prompt: Star",
                image: Marilyn
            },
            {
                label: "Prompt: Husky",
                image: Husky
            },
            {
                label: "Prompt: Pattern",
                image: Pattern
            },
            {
                label: "Prompt: Depressed",
                image: Depressed
            },
            {
                label: "Prompt: Precious",
                image: Precious
            },
        ],
        title: "Ink Series",
        medium: "Ink Drawing Selections",
        description: "These are a selection of ink drawings I have completed since 2018. I took a heavier interest in creating traditional ink pen drawings when challenged by a friend to completed Inktober 2018. While I did not complete all 30 drawings, I am very happy with the ones I did create. This selection is a mix of drawings intended for Inktober prompts, and other drawings I was simply inspired to create to further practice and experiment with inking.",
        skills: ["pnc", "ink"],
        links: []
    },
    {
        id: nanoid(),
        cardImage: CoralCard,
        previewImages: [
            {
                label: "Finished Digital Portrait",
                image: CoralImage
            },
            {
                label: "Finished Ink Drawing",
                image: CoralImage2
            },
            {
                label: "Reference Image",
                image: CoralImage3
            },
        ],
        title: "Self Portrait",
        medium: "Mixed Medium Digital Portrait",
        description: "This is a self portrait created using an ink drawing of an original photo, stylized in Photoshop. I was inspired by the announcement of Pantone's color of the year for 2019 'Living Coral', and wanted to create a portrait that incorporated the color for use on social media. I chose my reference photo and drew it in pencil using a grid system, then used Pigma Micron pens to ink the drawing. I then scanned and imported the drawing to Photoshop, where I modified the background and linework colors to the final image.",
        skills: ["ps", "pnc", "ink"],
        links: []
    },
    {
        id: nanoid(),
        cardImage: CycleCard,
        previewImages: [
            {
                label: "Self Portrait",
                image: CycleImage
            },
            {
                label: "Reference Image",
                image: CycleRef
            }
        ],
        title: "Self Portrait",
        medium: "Mixed Medium Digital Portrait",
        description: "This is a self portrait created using a blend of an original photo, and stylized portions created with Photoshop and Illustrator. I created a transparent 'mesh' guide made of triangles on top of the original photo in Photoshop, then used that guide in Illustrator to create and color a full low-poly illustration made up of individual vector triangles to match the original photo. I took this illustration back into Photoshop, and blended it with the original photo, and added brush and other effects to create a blend of the different elements into one another to create a seamless photo.",
        skills: ["ps", "ai"],
        links: []
    },
    {
        id: nanoid(),
        cardImage: RamonaCard,
        previewImages: [
            {
                label: "Finished Digital Animation",
                image: RamonaSeries
            },
            {
                label: "Finished Digital Illustration",
                image: RamonaImage
            },
            {
                label: "Reference Image",
                image: RamonaRef
            },
        ],
        title: "Ramona Flowers",
        medium: "Digital Illustration",
        description: "This is a stylized low-poly portrait of Ramona Flowers from the film Scott Pilgrim VS. The World. 'Low-poly' is short for low polygon count, a visual style intended to look like a rendered 3D model with fewer polygonal faces to make up the object. I create low-poly illustrations by importing my chosen reference into Photoshop, and tracing a transparent mesh guide of triangles over the image. Then I import both into Illustrator, trace and color layers of individual vector triangles to create an illusion of a low-poly 3D render. After the original portrait was done, I went back and created different colored iterations, and used After Effects to create the finished animation.",
        skills: ["ps", "ai", "ae"],
        links: [
            {
                site: "yt",
                text: "Watch Movie Trailer",
                destination: "https://www.youtube.com/watch?v=7wd5KEaOtm4"
            }
        ]
    },
    {
        id: nanoid(),
        cardImage: PerfumeCard,
        previewImages: [
            {
                label: "Cosmic Explorer Album",
                image: Perfume1
            },
            {
                label: "Kirin Commercial",
                image: Perfume2
            },
            {
                label: "Magic Of Love",
                image: Perfume3
            },
            {
                label: "Perfume X Uniqlo",
                image: Perfume4
            },
            {
                label: "Everyday",
                image: Perfume5
            },
            {
                label: "Time Warp",
                image: Perfume6
            },
        ],
        title: "Perfume Series",
        medium: "Digital Minimalism Illustrations",
        description: "These are a series of digital illustrations of the Japanese pop trio Perfume. I am heavily inspired by Perfume's music and performances (and by the girls themselves), and I seek to implement their quality of work and ethic in everything I do. There are elements of strong branding, elegance, simplicity throughout their work, and I wanted to mirror that by experimenting with a minimalistic style to see how much I could communicate visually using fewer shape elements. I designed these as wallpapers for a desktop size screen. Each piece represents a different look and feel based on its reference.",
        skills: ["ps", "ai"],
        links: [
            {
                site: "yt",
                text: "Cosmic Explorer",
                destination: "https://www.youtube.com/watch?v=JE5yk2xHalQ"
            },
            {
                site: "yt",
                text: "Kirin Commercial",
                destination: "https://www.youtube.com/watch?v=EzuvzjzlLx0"
            },
            {
                site: "yt",
                text: "Magic Of Love",
                destination: "https://www.youtube.com/watch?v=NhI2mp-WIck"
            },
            {
                site: "yt",
                text: "Perfume X Uniqlo",
                destination: "https://youtu.be/W2QcsMSeQb0?t=90"
            },
            {
                site: "yt",
                text: "Everyday",
                destination: "https://www.youtube.com/watch?v=2Jr44MUDwCU"
            },
            {
                site: "yt",
                text: "Time Warp",
                destination: "https://www.youtube.com/watch?v=7M4EwGf-lH0"
            },
        ]
    },
    {
        id: nanoid(),
        cardImage: PatientCard,
        previewImages: [
            {
                label: "Lyric Video Clip",
                image: PatientPreview
            },
        ],
        title: "Patient Lyric Video",
        medium: "Kinetic Typography",
        description: "This is a kinetic typography lyric video for the song Patient by Averly. I was inspired to put my motion graphic skills to the test by animating the lyrics to this song. I created the vector elements in Illustrator and animated them using After Effects.",
        skills: ["ai", "ae"],
        links: [
            {
                site: "vm",
                text: "Watch Lyric Video",
                destination: "https://vimeo.com/312762416"
            },
            {
                site: "yt",
                text: "Watch Patient Music Video",
                destination: "https://www.youtube.com/watch?v=OZ8833Ye-EA"
            }
        ]
    },
]

export default CreativePortfolio;