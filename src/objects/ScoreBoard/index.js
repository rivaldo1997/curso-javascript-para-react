import PlayerName from "../../components/PlayerName";

function ScoreBoard() {
    return `
    <header class="Score-Board">
        ${PlayerName("Player1")}
        ${PlayerName("Player2")}
    </header>
    `;
}

export default ScoreBoard;