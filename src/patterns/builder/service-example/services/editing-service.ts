type EditingHistory = Array<{
  name: string;
  options?: unknown;
}>;

interface IEditingService {
  getEditingHistory(): EditingHistory;
}

export class EditingService implements IEditingService {
  private readonly editingHistory: EditingHistory = [];

  constructor(editingHistory: EditingHistory = []) {
    editingHistory.forEach(event => this.editingHistory.push(event));
  }

  getEditingHistory() {
    return this.editingHistory;
  }
}
