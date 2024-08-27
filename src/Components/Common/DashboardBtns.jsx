import { Button, Select } from "antd"

const { Option } = Select;

const DashboardBtns = ({isEditBtn, isDashboard, language, setLanguage, onEdit, setIsDashboard, onSubmit}) => {
    return (
        <div className="btnsWrapper">
        {isEditBtn && (
          <>
            <Select
              className={`language-select ${isDashboard ? "hidden" : ""}`}
              value={language}
              defaultValue='ru'
              onChange={setLanguage}
              style={{ width: 70, backgroundColor: "white", marginRight: "10px", borderRadius: "7px" }}
            >
              <Option value="ru">Рус</Option>
              <Option value="en">Eng</Option>
              <Option value="uz">Uzb</Option>
            </Select>
            <Button
              className={`edit-button ${isDashboard ? "hidden" : ""}`}
              onClick={onEdit}
              style={{ marginRight: "10px" }}
            >
              Edit
            </Button>
          </>
        )}
        {isDashboard ? (
          <>
            <Button onClick={() => setIsDashboard(false)} style={{ marginRight: "10px" }}>
              Cancel
            </Button>
            <Button onClick={onSubmit}>Save</Button>
          </>
        ) : null}
      </div>
    )
}
export default DashboardBtns