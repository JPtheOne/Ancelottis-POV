import React from 'react';
import './Header.css';
import UserEarning from '../UserEarning/UserEarning';
import iconPlayers from '../../assets/icon-players.png';
import iconCalendar from '../../assets/icon-calendar.png';
import iconFootball from '../../assets/icon-football.png';

class Header extends React.Component {
    render() {
        const currentDate = new Date().toLocaleDateString('en-US', {year: 'numeric', month: 'short', day: 'numeric'});
        return (
            <div class="Header">
                <div class="left-user-info">
                    <div class="left-edge"></div>
                    <div class="user-team">
                        <img alt="" class="user-team-badge" src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/Argentina_national_football_team_logo.svg/800px-Argentina_national_football_team_logo.svg.png"></img>
                    </div>
                    <div class="user-info">
                        <div class="user-info-header">
                            <span class="team-name">Argentina</span>
                            <span class="team-date">{currentDate}</span>
                        </div>
                        <div class="user-earnings-container">
                            <UserEarning title="Jugadores" value="23" img={iconPlayers}></UserEarning>
                            <UserEarning title="Últimos Partidos" value="3-1 (G), 2-2 (E), 1-0 (P)" img={iconCalendar}></UserEarning>
                            <UserEarning title="Posición en la tabla" value="1ero" img={iconFootball}></UserEarning>
                        </div>
                        <div class="right-edge"></div>
                    </div>
                </div>
          </div>
        )
    }
}

export default Header;