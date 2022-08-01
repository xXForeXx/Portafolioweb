function AsideComponent ({name, hrefBlank, srcImg}){
  const openInNewTab = url => {
    window.open(url, '_blank');
  };

  return (
    <span onClick={() => openInNewTab(`${hrefBlank}`)} className=
      'flex justify-center rounded-full hover:border-2 hover:border-cyan-500'>
      <img alt={name} src={srcImg} />
    </span>
  )
}

export default AsideComponent;