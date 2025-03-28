import {EditingHistory, IEditingService} from "../contracts";

export class EditingService implements IEditingService {
  private readonly editingHistory: EditingHistory = [];

  constructor(editingHistory: EditingHistory = []) {
    editingHistory.forEach(event => this.editingHistory.push(event));
  }

  getEditingHistory() {
    return this.editingHistory;
  }
}
