const NavbarDivVariant = {
    initial: {
      y: '-120vw',
    },
    final:{
      y: 0,
      transition: {
        duration: 0.6,
        type: 'tween',
        stiffness: 40
      }
    }
  }

  const NavbarVariantDesktop = {
    initial: {
      y: '-120vw',
    },
    final:{
      y: 0,
      transition: {
        duration: 0.6,
        type: 'spring',
        stiffness: 35
      }
    }
  }

  export {NavbarDivVariant, NavbarVariantDesktop}