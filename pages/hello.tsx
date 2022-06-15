const Hello = () => {
  const scriptInner = `!function(e){var t="_ion_ionizer_"+Date.now(),n=e.getElementsByTagName("script");(n=e.currentScript||n[n.length-1]).setAttribute("data-ion-embed",'{"url":"//discover.automox.com/build/savings-calculator-v2?_ion_target=embed-1.0","id":"'+t+'","appendQuery":false}');var r=e.createElement("script");r.src="https://ionfiles.scribblecdn.net/scripts/ionizer-1.2.min.js",n.parentNode.insertBefore(r,n.nextSibling)}(document);`

  return(
    <div>
      <h2>Hello world</h2>
    </div>
  )
}

export default Hello