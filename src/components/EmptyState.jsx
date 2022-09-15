function EmptyState() {
    return (
      <div data-cy="Dashboard Empty State" className="max-w-4xl mx-auto">
        <img
          src={require("../assets/img/activity-empty-state.png")}
          alt="Empty State"
        />
      </div>
    );
  }
  
  export default EmptyState;
  