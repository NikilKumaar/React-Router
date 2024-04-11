function Footer() {
    const date = new Date()
    return <footer className="py-5 bg-dark d-flex display-direction">
        <div className="container"><a href="#" className="m-0 text-center text-white text-decoration-none">Terms and Conditions</a></div>
      <div className="container"><a href="#" className="m-0 text-center text-white text-decoration-none">Copyright &copy; {date.getFullYear()}. GUVI Geeks Network Pvt. Ltd</a></div>
        <div className="container"><a href="#" className="m-0 text-center text-white text-decoration-none">Privacy Policy</a></div>
</footer>
}

export default Footer