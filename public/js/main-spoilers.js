const mainSpoiler__1=document.getElementById("main-spoiler__1"),mainSpoiler__2=document.getElementById("main-spoiler__2"),mainSpoiler__3=document.getElementById("main-spoiler__3"),mainSpoiler__4=document.getElementById("main-spoiler__4"),mainSpoiler__5=document.getElementById("main-spoiler__5"),mainSpoiler__6=document.getElementById("main-spoiler__6"),mainSpoilerContent__1=document.getElementById("main-spoiler__content__1"),mainSpoilerContent__2=document.getElementById("main-spoiler__content__2"),mainSpoilerContent__3=document.getElementById("main-spoiler__content__3"),mainSpoilerContent__4=document.getElementById("main-spoiler__content__4"),mainSpoilerContent__5=document.getElementById("main-spoiler__content__5"),mainSpoilerContent__6=document.getElementById("main-spoiler__content__6"),mainSpoiler__1_second=document.getElementById("main-spoiler__1-second");windowWidth<=991?(mainSpoiler__1.style.display="none",mainSpoiler__1_second.style.display="block"):(mainSpoiler__1.style.display="block",mainSpoiler__1_second.style.display="none");const mainSpoiler__1Closer=()=>{mainSpoiler__1.classList.contains("main-spoiler")?(mainSpoiler__1.classList.remove("main-spoiler"),mainSpoiler__1.classList.add("main-spoiler__active")):(mainSpoiler__1.classList.remove("main-spoiler__active"),mainSpoiler__1.classList.add("main-spoiler"))},mainSpoiler__1SecondCloser=()=>{mainSpoiler__1_second.classList.contains("main-spoiler")?(mainSpoiler__1_second.classList.remove("main-spoiler"),mainSpoiler__1_second.classList.add("main-spoiler__active")):(mainSpoiler__1_second.classList.remove("main-spoiler__active"),mainSpoiler__1_second.classList.add("main-spoiler"))},mainSpoiler__2Closer=()=>{mainSpoiler__2.classList.contains("main-spoiler")?(mainSpoiler__2.classList.remove("main-spoiler"),mainSpoiler__2.classList.add("main-spoiler__active")):(mainSpoiler__2.classList.remove("main-spoiler__active"),mainSpoiler__2.classList.add("main-spoiler"))},mainSpoiler__3Closer=()=>{mainSpoiler__3.classList.contains("main-spoiler")?(mainSpoiler__3.classList.remove("main-spoiler"),mainSpoiler__3.classList.add("main-spoiler__active")):(mainSpoiler__3.classList.remove("main-spoiler__active"),mainSpoiler__3.classList.add("main-spoiler"))},mainSpoiler__4Closer=()=>{mainSpoiler__4.classList.contains("main-spoiler")?(mainSpoiler__4.classList.remove("main-spoiler"),mainSpoiler__4.classList.add("main-spoiler__active")):(mainSpoiler__4.classList.remove("main-spoiler__active"),mainSpoiler__4.classList.add("main-spoiler"))},mainSpoiler__5Closer=()=>{mainSpoiler__5.classList.contains("main-spoiler")?(mainSpoiler__5.classList.remove("main-spoiler"),mainSpoiler__5.classList.add("main-spoiler__active")):(mainSpoiler__5.classList.remove("main-spoiler__active"),mainSpoiler__5.classList.add("main-spoiler"))},mainSpoiler__6Closer=()=>{mainSpoiler__6.classList.contains("main-spoiler")?(mainSpoiler__6.classList.remove("main-spoiler"),mainSpoiler__6.classList.add("main-spoiler__active")):(mainSpoiler__6.classList.remove("main-spoiler__active"),mainSpoiler__6.classList.add("main-spoiler"))};mainSpoiler__1.addEventListener("click",mainSpoiler__1Closer),mainSpoiler__1_second.addEventListener("click",mainSpoiler__1SecondCloser),mainSpoiler__2.addEventListener("click",mainSpoiler__2Closer),mainSpoiler__3.addEventListener("click",mainSpoiler__3Closer),mainSpoiler__4.addEventListener("click",mainSpoiler__4Closer),mainSpoiler__5.addEventListener("click",mainSpoiler__5Closer),mainSpoiler__6.addEventListener("click",mainSpoiler__6Closer);const mainSpoiler__1_991px=()=>{document.documentElement.clientWidth<=991?(mainSpoiler__1.style.display="none",mainSpoiler__1_second.style.display="block"):(mainSpoiler__1.style.display="block",mainSpoiler__1_second.style.display="none")};window.addEventListener("resize",mainSpoiler__1_991px);