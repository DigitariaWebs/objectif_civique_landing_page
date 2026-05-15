export default function AppBackground() {
  return (
    <div className="app-background" aria-hidden="true">
      <div
        className="blob blob-blue animate-blob"
        style={{ width: 520, height: 520, top: "-80px", left: "-120px" }}
      />
      <div
        className="blob blob-red animate-blob-delayed"
        style={{ width: 460, height: 460, top: "10%", right: "-140px" }}
      />
      <div
        className="blob blob-white animate-blob"
        style={{ width: 380, height: 380, top: "45%", left: "30%" }}
      />
      <div
        className="blob blob-blue animate-blob-delayed"
        style={{ width: 420, height: 420, bottom: "5%", right: "10%" }}
      />
      <div
        className="blob blob-red animate-blob"
        style={{ width: 340, height: 340, bottom: "-100px", left: "-80px" }}
      />
    </div>
  );
}
