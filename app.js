const shareButtons=document.querySelectorAll('.tile-share-button')
console.log(shareButtons)

async function copyText(e){
//so you can share URL
e.preventDefault()
const link = this.getAttribute('link')
console.log(link)
try{
    await navigator.clipboard.writeText('link')
    alert("copied the text: "+ link)
} catch(err){
    console.error(err)
}
}

shareButtons.forEach(shareButton =>  shareButton.addEventListener('click', copyText))

