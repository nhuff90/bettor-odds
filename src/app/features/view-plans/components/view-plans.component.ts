import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-view-plans',
  templateUrl: './view-plans.component.html',
  styleUrls: ['./view-plans.component.css']
})
export class ViewPlansComponent implements OnInit {
  plans = [
    {
      name: 'Basic',
      price: '14.99',
      features: ['Real-time odds tracking', 'Pure arbitrage detection'],
      popular: false
    },
    {
      name: 'Premium',
      price: '59.99',
      features: ['Partial arbitrage suggestions', 'AI-powered analysis', 'Custom alerts'],
      popular: true
    },
    {
      name: 'Professional',
      price: '199.99',
      features: ['All Premium features', 'Dedicated support', 'Advanced analytics'],
      popular: false
    }
  ];

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('View Plans - BettorOdds');
  }
}
