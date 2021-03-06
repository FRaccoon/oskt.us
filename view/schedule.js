const html = require('choo/html')
const css = require('scopedify')

const scope = css('./schedule')

module.exports = function scheduleView (state, emit) {
  return scope(html`
    <section class="root">
      <div>
        <div class="title">SCHEDULE</div>
        <div class="content">
          <div class="timeline">
            <div class="header">
              <div class="month">Month</div>
              <div class="detail">Activities / Events</div>
            </div>
            <div class="table">
              <div class="month column">
                <div class="row label">4</div>
                <div class="row label">5</div>
                <div class="row label">6</div>
                <div class="row label">7</div>
                <div class="row label">8</div>
                <div class="row label">9</div>
                <div class="row label">10</div>
                <div class="row label">11</div>
                <div class="row label">12</div>
                <div class="row label">1</div>
                <div class="row label">2</div>
                <div class="row label">3</div>
              </div>
              <div class="detail column">
                <div class="row events big l-group">
                  <div class="ja">レクチャー班活動</div>
                  <div class="en">Lecture Groups</div>
                </div>
                <div class="row events small summer-camp">
                  <div class="ja">夏合宿</div>
                  <div class="en">Summer Camp</div>
                </div>
                <div class="row events small festival">
                  <div class="ja">理大祭</div>
                  <div class="en">Festival</div>
                </div>
                <div class="row events big p-group">
                  <div class="ja">プロジェクト班活動</div>
                  <div class="en">Project Groups</div>
                </div>
                <div class="row events small winter-camp">
                  <div class="ja">冬合宿</div>
                  <div class="en">Winter Camp</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `)
}
