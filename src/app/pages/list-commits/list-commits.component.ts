import {AfterViewInit, OnInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {GithubService} from '../../shared/http-service/github.service';
import  {Commit} from '../../shared/interfaces/commit'


@Component({
  selector: 'app-list-commits',
  templateUrl: './list-commits.component.html',
  styleUrls: ['./list-commits.component.scss']
})



export class ListCommitsComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['author', 'message', 'date'];
  dataSource: MatTableDataSource<Commit>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private service: GithubService
  ) {

    this.dataSource = new MatTableDataSource([]);
  }

  ngOnInit(): void{
    this.service.get().subscribe((res: Commit[]) =>{
      console.log(res);
      this.dataSource.data  = res;
    }, () => {
      
    })
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}