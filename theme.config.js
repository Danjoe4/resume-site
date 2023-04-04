const YEAR = new Date().getFullYear()

export default {
  footer: (
    <footer>
      <small>
        <time>Last updated 4/9/23</time>
      </small>
      <style jsx>{`
        footer {
          margin-top: 8rem;
        }
        a {
          float: right;
        }
      `}</style>
    </footer>
  ),
}
