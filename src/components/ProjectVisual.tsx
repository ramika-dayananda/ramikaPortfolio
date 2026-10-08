import type { Project } from '../data/portfolio'

export function ProjectVisual({ visual }: { visual: Project['visual'] }) {
  return (
    <div className={`mock mock-${visual}`}>
      <div className="mock-body">
        {visual === 'calm' ? <CalmMock /> : null}
        {visual === 'rent' ? <RentMock /> : null}
        {visual === 'plate' ? <PlateMock /> : null}
        {visual === 'fitness' ? <FitnessMock /> : null}
        {visual === 'game' ? <GameMock /> : null}
        {visual === 'retail' ? <RetailMock /> : null}
      </div>
    </div>
  )
}

function CalmMock() {
  return (
    <div className="calm-layout">
      <div className="calm-rings" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="calm-copy">
        <p>Session</p>
        <strong>Check-in</strong>
        <ul>
          <li>Prompt</li>
          <li>Response</li>
          <li>Next step</li>
        </ul>
      </div>
    </div>
  )
}

function RentMock() {
  return (
    <div className="rent-layout">
      <p className="mock-label">Listings</p>
      <div className="rent-row">
        <span className="rent-thumb" />
        <span>
          <strong>Listing</strong>
          <em>Open</em>
        </span>
        <span className="rent-msg">Message</span>
      </div>
      <div className="rent-row">
        <span className="rent-thumb" />
        <span>
          <strong>Listing</strong>
          <em>Open</em>
        </span>
        <span className="rent-msg">Message</span>
      </div>
    </div>
  )
}

function PlateMock() {
  return (
    <div className="plate-layout">
      <div className="plate-circle" aria-hidden="true" />
      <ul>
        <li>Meal photo</li>
        <li>Health note</li>
        <li>Swap</li>
        <li>Voice</li>
      </ul>
    </div>
  )
}

function FitnessMock() {
  return (
    <div className="fit-layout">
      <p className="mock-label">Workout log</p>
      {['Set 1', 'Set 2', 'Set 3'].map((label, index) => (
        <div className="fit-row" key={label}>
          <span>{label}</span>
          <span className="fit-bar">
            <i style={{ width: `${62 + index * 12}%` }} />
          </span>
        </div>
      ))}
    </div>
  )
}

function GameMock() {
  return (
    <div className="game-layout">
      <p className="mock-label">Board</p>
      <div className="game-grid">
        {Array.from({ length: 16 }, (_, index) => (
          <span key={index} className={index === 6 ? 'is-bug' : undefined} />
        ))}
      </div>
    </div>
  )
}

function RetailMock() {
  return (
    <div className="retail-layout">
      <p className="mock-label">Schema</p>
      <div className="retail-head">
        <span>Item</span>
        <span>Qty</span>
        <span>Status</span>
      </div>
      {Array.from({ length: 3 }, (_, index) => (
        <div className="retail-row" key={index}>
          <span />
          <span />
          <span />
        </div>
      ))}
    </div>
  )
}
